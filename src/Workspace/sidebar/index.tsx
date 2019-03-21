import * as React from 'react'
import styled from 'styled-components';
import INTERACTION from '../../reuse/interaction';

const fakeData = [
    {
        "Section": [
            { id: 0, type: 'Section' , children : [1 , 2] },
            { id: 1, type: 'Section' },
        ],
    },
    {
        'Button': [
            { id: 0, type: 'Button', children: [1] },
            {
                id: 1, type: 'Text', tyles: {
                    backgroundColor: 'red'
                },
                data: {
                    value: 'ok'
                }
            }
        ]
    },
    {
        'Row =)))))))))' : [
            {id : 0 , type : 'Row' },
         
        ]
    },
    {
        Column : [
            {id : 0 , type : 'Column'}
        ]
    }
]
class Sidebar extends React.Component {
    handleStartDrap = (ev) => {
        console.log('start', ev)
        const data = ev.target.getAttribute('data-element')
        INTERACTION.categoryDrapStart = 'DRAG_ELEMENT'
        ev.dataTransfer.setData("PB-duc", data);
    }
    render() {
        return <WrapperSideBar>
            <ListFakeData>
                {
                    fakeData.map(item => {
                        const name = Object.keys(item)[0]
                        const dataString = JSON.stringify(item[name])
                        return <DrapItem
                            data-element={dataString}
                            draggable
                            onDragStartCapture={this.handleStartDrap}
                        >
                        {name}
                        </DrapItem>
                    })
                }
            </ListFakeData>
        </WrapperSideBar>
    }
}
const ListFakeData = styled.div`

`
const WrapperSideBar = styled.div`
    flex : 2;
    margin-right : 3px;
`
const ListDrapItem = styled.div`
    display :flex;
    flex-direction : row;
`
const DrapItem = styled.div`
    width: auto;
    height: 50px;
    background: #EFEFED;
    display : flex;
    justify-content : center;
    align-items : center;
    color : #4401cc;
    font-stretch: 900;
    border: 1px solid gainsboro;
    box-sizing: border-box;
`
export default Sidebar