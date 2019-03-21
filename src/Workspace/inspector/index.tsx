import * as React from 'react'
import {  Subscribe } from 'unstated-x';
import common from '../../Element/common';
import styled from 'styled-components';
import { ContainerContext } from '../../Core/Binding';
import UIFieldResouce from '../../Components/UI/UIFieldResource';
import { StyledSolidButton } from '../../Components/styled/button';
import UIField from '../../Components/UI/UIField';
class Inspector extends React.Component {
    state = {
        view: 'General'
    }

    handleMouseDown = (e) => {
        const view = e.target.getAttribute('data-category')
        this.setState({ view })
    }
    render() {
        return <ContainerContext.Consumer>
            {
                containerElementSelected => {
                    if (!containerElementSelected) return
                    const { type } = containerElementSelected.state

                    let InspectorElement = { ...UIFieldResouce(), ...common[type].InspectorDuc }

                    return <Subscribe to={[containerElementSelected]}>
                        {
                            (con) => {
                                return <WrapperSideBar>
                                    <div>
                                    <UIField vectical>
                                        {
                                            ['General', 'Styling'].map(item => {
                                                return <StyledSolidButton
                                                    data-active={item === this.state.view}
                                                    data-category={item}
                                                    onMouseDown={this.handleMouseDown}>
                                                    {item}
                                                </StyledSolidButton>
                                            })}
                                    </UIField>
                                    {this.state.view === 'General' ? (InspectorElement.general || <div></div>)
                                        : InspectorElement.style ? InspectorElement.style : null
                                    }
                                    </div>
                                </WrapperSideBar>
                            }
                        }
                    </Subscribe>
                }
            }
        </ContainerContext.Consumer>
    }
}
const $Inspector = styled.div`

`
const WrapperSideBar = styled.div`
flex : 3;
/* width: 20px; */
padding-left : 10px;
`
export default Inspector