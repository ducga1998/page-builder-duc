import * as React from 'react'
import { SubscribeOne } from 'unstated-x';
import workspaceContainer from '../../Container/WorkspaceContainer';
import { storeElement } from '../../Container/BaseContainer';
import common from '../../Element/common';
import styled from 'styled-components';
console.log('workspaceContainer',workspaceContainer)
class Inspector extends React.Component {
    render(){
        return <SubscribeOne to={workspaceContainer} bind={['selected']}>
                {
                    ws => {
                        
                        const {selected}= ws.state
                        console.log('selected in workspaceContainer',selected)
                        const ElementContainer = storeElement.get(selected[0])
                        if(!ElementContainer) return null
                        const {type } = ElementContainer.state
        
                        const InspectorElement = common[type].InspectorDuc
                        console.log('InspectorElement',InspectorElement)
                        return <WrapperSideBar>
                            {InspectorElement ? InspectorElement(ElementContainer).general : <div>Not inspector</div>}
                        </WrapperSideBar>
                    }
                }
            </SubscribeOne>
    }
}
const WrapperSideBar = styled.div`
flex : 3
`
export default Inspector