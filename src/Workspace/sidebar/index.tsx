import * as React from 'react'
import styled from 'styled-components';

const fakeData =  [
    {
        element1 : [
            {id : 0 , type : 'Section', children : [1]} ,
            {id : 1, type : 'Button',  children  : [2],  styles : {
                backgroundColor : 'red'
            }},
            {id : 2, type : 'Text', data : { value : 'Button'} }

        ]
    } 
] as any
class Sidebar extends React.Component {
    handleStartDrap = (ev) => {
        console.log('start', ev)
        const data = ev.target.getAttribute('data-element')
        console.log('data ', data)
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
                        return <DrapItem 
                        data-element={item} 
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