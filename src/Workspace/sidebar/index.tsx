import * as React from 'react'
import styled from 'styled-components';
import INTERACTION from '../../reuse/interaction';

const fakeData = [
    {
        "Section": [
            { id: 0, type: 'Section'  },
            
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
                    value: 'Button'
                }
            }
        ]
    },
    {
        'Row =)))))))))' : [
            {id : 0 , type : 'Row' , children : [1,2,3,4] },
            {id : 1 , type : 'Column'},
            {id : 2 , type : 'Column'},
            {id : 3 , type : 'Column'},
            {id : 4 , type : 'Column'}
            
         
        ]
    },
    {
        Column : [
            {id : 0 , type : 'Column'}
        ]
    },
    {
        'Nav : ))' : [
            {id : 0, type : 'Nav', children : [1]}, 
            {id : 1 , type : 'Ul' , children: [2,3,4]},
            {id : 2 , type : 'Li' , children: [5]},
            {id : 3 , type : 'Li' , children: [6]},
            {id : 4 , type : 'Li' , children: [7]},
            {id : 5 , type : 'Text' ,data: {
                value : 'Link 1'
            } },
            {id : 6 , type : 'Text' ,data: {
                value : 'Link 2'
            } },
            {id : 7 , type : 'Text' ,data: {
                value : 'Link 3'
            } },
            
        
        ]
    }
]
class Sidebar extends React.Component {
    handleStartDrap = (ev) => {
        const dataAttrString = ev.target.getAttribute('data-element')
        INTERACTION.categoryDrapStart = 'DRAG_ELEMENT'
        const arrDataConvert =JSON.parse(dataAttrString)
        if(Array.isArray(arrDataConvert) && arrDataConvert.length > 0){
                const root =  arrDataConvert.find(item => item.id === 0) as any
                console.log('root',root)
                INTERACTION.typeElement = root.type
        }
        else {
            throw "Error data drap start, please check data in file index in folder sidebar"
        }
        ev.dataTransfer.setData("PB-duc", dataAttrString);
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