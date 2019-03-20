import * as React from 'react'
import { SubscribeOne, Subscribe } from 'unstated-x';
import workspaceContainer from '../../Container/WorkspaceContainer';
import { storeElement } from '../../Container/BaseContainer';
import common from '../../Element/common';
import styled from 'styled-components';
import { ContainerContext } from '../../Core/Binding';
// console.log('workspaceContainer',workspaceContainer)
class Inspector extends React.Component {
    render() {
        return <ContainerContext.Consumer>
            {
                containerElementSelected => {
                    if (!containerElementSelected) return
                    const { type } = containerElementSelected.state

                    const InspectorElement = common[type].InspectorDuc
                    // console.log('InspectorElement',InspectorElement)
                    return <Subscribe to={[containerElementSelected]}>
                        {
                            (con) => {
                                return <WrapperSideBar>
                                    {InspectorElement ?<>
                                    { InspectorElement.general }
                                    ---------Style-----------
                                    { InspectorElement.style?  InspectorElement.style :null }
                                    </>: <div>Not inspector</div>}
                                </WrapperSideBar>
                            }
                        }
                    </Subscribe>
                }
            }
        </ContainerContext.Consumer>
    }
}
const WrapperSideBar = styled.div`
flex : 3;
padding-left : 10px;
`
export default Inspector