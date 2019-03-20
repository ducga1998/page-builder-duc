import * as React from 'react'
import styled from 'styled-components';
import { SubscribeOne } from 'unstated-x';
import workspaceContainer from '../Container/WorkspaceContainer';
import { storeElement } from '../Container/BaseContainer';

class Selection extends React.Component<any> {
    state = {
        target : null
    }
    selRef :HTMLElement
    updatePosition = async ( ) => {
        const {idSelected} = this.props
        const target = document.querySelector(`[data-element="${idSelected}"]`)
        if(!target) return
        const { width, height, top, left } = target.getBoundingClientRect()
        const scrollTop = window.scrollY
        Object.assign(this.selRef.style, { width: width + 'px', height: height + 'px', top: top +scrollTop+ 'px', left: left + 'px', display: 'block' })
    }
    componentDidUpdate(){
       console.log('update')
       this.updatePosition()
    }
    render() {
        return <SubscribeOne to={workspaceContainer} bind={['selected']}>
            {
                () => {
                    const {selected} = workspaceContainer.state
                    
                    return <$Selection ref={ e => this.selRef = e}  />
                }
            }
        </SubscribeOne>
    }
}
const $Selection = styled.div`
    position: absolute;
	box-sizing: border-box;
    border :3px dashed ${props => props.theme.brand.default};
	pointer-events: none;
	/* display: none; */
	z-index: 11;
`
export default Selection