import * as React from 'react'
import styled from 'styled-components';
import INTERACTION from '../../reuse/interaction';

const fakeData = [
    [
        { id: 0, type: 'Section', children: [1] },
        {
            id: 1, type: 'Button', children: [2], styles: {
                backgroundColor: 'red'
            }
        },
        { id: 2, type: 'Text', data: { value: 'Button' } }
    ]
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
            <ListDrapItem>
                {
                    ['div', 'a', 'span', 'button', 'input', 'section'].map(item => {
                        return <DrapItem
                            onDragStartCapture={this.handleStartDrap}
                            data-element={item}
                            draggable
                        >
                            {item}
                        </DrapItem>
                    })
                }
            </ListDrapItem>
            <ListFakeData>
                {
                    fakeData.map(item  => {
                        const dataString = JSON.stringify(item)
                        return <DrapItem 
                        data-element={dataString} 
                        draggable 
                        onDragStartCapture={this.handleStartDrap}
                        />
                    })
                }
            </ListFakeData>
        </WrapperSideBar>
    }
}
const ListFakeData = styled.div`

`
const WrapperSideBar = styled.div`

`
const ListDrapItem = styled.div`
    display :flex;
    flex-direction : row;
`
const DrapItem = styled.div`
    width : auto;
    height : 50px;
    
    background : red;
    margin: 20px;
`
export default Sidebar