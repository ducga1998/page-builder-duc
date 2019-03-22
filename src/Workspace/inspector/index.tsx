import * as React from 'react'
import { Subscribe } from 'unstated-x';
import common from '../../Element/common';
import styled from 'styled-components';
import { ContainerContext } from '../../Core/Binding';
import UIFieldResouce from '../../Components/UI/UIFieldResource';
import { StyledSolidButton } from '../../Components/styled/button';
import UIField from '../../Components/UI/UIField';
import { P } from '../../Components/styled/base';
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
                    if (!containerElementSelected) return <WrapperSideBar center>
                        <P style={{ color: '#a2a3a5' }}>
                            Not have Inspector, please selected any element in editor
                        </P>
                    </WrapperSideBar>
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
                                                    return <ButtonInspector
                                                        data-active={item === this.state.view}
                                                        data-category={item}
                                                        onMouseDown={this.handleMouseDown}>
                                                        {item}
                                                    </ButtonInspector>
                                                })}
                                        </UIField>
                                       <WrapperContent> {
                                            this.state.view === 'General' ?
                                                (InspectorElement.general || <div></div>) :
                                                InspectorElement.style ? InspectorElement.style : null
                                        }
                                        </WrapperContent>
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
const ButtonInspector = styled(StyledSolidButton)`
    width: 50%;
    border-radius: 0px;
   
`
const WrapperContent = styled.div`
padding : 20px;
`
const WrapperSideBar = styled.div<any>`
flex : 3;
${props => props.center && `display : flex;justify-content : center;
align-items : center;`}
background: #dcdcdc;

`
export default Inspector