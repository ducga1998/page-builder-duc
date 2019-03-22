import * as React from 'react'
import styled from 'styled-components';
import { SubscribeOne } from 'unstated-x';
import workspaceContainer from '../../Container/WorkspaceContainer';
import { StyledOutlineButton } from '../../Components/styled/button';
import { storeElement } from '../../Container/BaseContainer';

class PathWay extends React.Component<any> {
    state  ={
        arrPath  : []
    }
    updatePathWay = (domElement , arr = []) => {
            // console.log('domElement',domElement)
          
            const parentDom = domElement.parentElement.closest('[data-element]')
            // console.log('parentDom',parentDom)

            if(!domElement ||!parentDom ){
                return arr
            }
            
            const type = domElement.getAttribute('data-type')
            const id = domElement.getAttribute('data-element')
            arr.push({type,  id})
            return this.updatePathWay(parentDom , arr)
    }
    handleMouseDown = (id) => {
        workspaceContainer.setState({selected : [id]})
    }
    render(){

        return <SubscribeOne to={workspaceContainer} bind={['selected']}>
           {
                ws => {
                    const idSelected = ws.state.selected[0]
                    if(!idSelected) return
                    const containerElement = storeElement.get(idSelected)
                    const arrPath = this.updatePathWay(containerElement.state.domElement) as any[]
                    return <WrapperPathWay>
                        {arrPath.reverse().map(item => {
                            return <StyledOutlineButton 
                            onMouseDown={ () => {
                                this.handleMouseDown(item.id)
                            }}
                            data-active={item.id ===idSelected }>
                             {item.type}
                             </StyledOutlineButton>
                        })}
                    </WrapperPathWay>
                }
           }
        </SubscribeOne>
    }
}
const WrapperPathWay = styled.div`
    display :flex;
`   
export default PathWay