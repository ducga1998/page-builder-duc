import * as React from 'react'
import styled from 'styled-components';
import { SubscribeOne } from 'unstated-x';
import workspaceContainer from '../../Container/WorkspaceContainer';
import { StyledOutlineButton, StyledTextButton, StyledSolidButton } from '../../Components/styled/button';
import { storeElement } from '../../Container/BaseContainer';

class PathWay extends React.Component<any> {
    state  ={
        arrPath  : []
    }
    updatePathWay = (domElement , arr = []) => {
            console.log('domElement',domElement)
          if(!domElement ) return  arr
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
                    if(!idSelected) return<WrapperPathWay />
                    const containerElement = storeElement.get(idSelected)
                    const arrPath = this.updatePathWay(containerElement.state.domElement) as any[]
                    return <WrapperPathWay>
                        {arrPath.reverse().map(item => {
                            return <StyledSolidButton color="space.default"
                            hoverColor="space.dark"
                            onMouseDown={ () => {
                                this.handleMouseDown(item.id)
                            }}
                            data-active={item.id ===idSelected }>
                             {item.type}
                             </StyledSolidButton>
                        })}
                    </WrapperPathWay>
                }
           }
        </SubscribeOne>
    }
}
const WrapperPathWay = styled.div`
    display :flex;
    height : 50px;
    background : #4400cf;
    ${StyledSolidButton}{
        margin-right :20px;
    }

`   
export default PathWay