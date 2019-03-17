import * as React from 'react'
import styled from 'styled-components';
import { SubscribeOne } from 'unstated-x';
import workspaceContainer from '../Container/WorkspaceContainer';

class Selection extends React.Component<any> {
    state = {
        target : null
    }
    selRef :HTMLElement
    updatePosition = async (target ) => {
        const scrollTop =window.scrollY
        console.log('scrollTop',scrollTop )
        if(!target &&!this.state.target) return
        await this.setState({target})

        if(this.state.target) {
            target = this.state.target
        } 
        console.log('target',target)
        const { width, height, top, left } = target.getBoundingClientRect()
       
     
        Object.assign(this.selRef.style, { width: width + 'px', height: height + 'px', top: top +scrollTop+ 'px', left: left + 'px', display: 'block' })
    }
    componentDidMount = () => {
        window.addEventListener('scroll' ,() => {
            // this.updatePosition(this.state.target)
        })
    }
    // componentWillUnmount(){
    // }
    render() {
        return <SubscribeOne to={workspaceContainer} bind={['selected']}>
            {
                () => {
                    const {selected} = workspaceContainer.state
                    
                    return <$Selection ref={ e => this.selRef = e} />
                }
            }
        </SubscribeOne>
    }
}
const $Selection = styled.div`
    position: absolute;
	box-sizing: border-box;
    border :3px dashed green;
	pointer-events: none;
	/* display: none; */
	z-index: 10;
`
export default Selection