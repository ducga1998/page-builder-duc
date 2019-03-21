import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import { StyledOutlineButton } from '../../Components/styled/button';
import { Subscribe } from 'unstated-x';
import { SketchPicker } from 'react-color';
import { ControlInputStyle, ContainerContext } from '../../Core/Binding';
import { SubscribeStyle } from '../../Container/StyleContainer';
import UIInput from '../../Components/UI/UIInput';
import UIField from '../../Components/UI/UIField';
import styled from 'styled-components';

class Button extends React.Component<any> {
    static type = 'Button'
    static defaultProps = {
        categoryButton : 'primary'
    }
    static get InspectorDuc() {
        return {
            general: <ContainerContext.Consumer>
                {
                    container => {

                        const { value, id } = container.state
                        return <>
                            <SubscribeStyle to={container} bind={'background'} key={id}>
                                {
                                    (containerStyle, rule) => {
                                        return <>
                                            <SketchPicker
                                                // value={styles.style['background']}
                                                onChangeComplete={(color) => {
                                                    container.setStyle({ background: color.hex })
                                                }} />
                                            <UIInput onChange={value => {
                                                container.setStyle({ background: value })
                                            }} value={rule.style['background']} />
                                        </>
                                    }
                                }
                            </SubscribeStyle>
                        </>
                    }
                }
            </ContainerContext.Consumer>,
            style: <>
                <UIField label="Background">
                    <ControlInputStyle bind="style.background" />
                </UIField>
                <UIField label="Padding">
                    <ControlInputStyle bind="style.padding" />
                </UIField>
            </>
        }
    }
    render() {
        return <$Button className={`btn btn-outline-${this.props.categoryButton}`}>{this.props.children} </$Button>
    }
}
const $Button = styled.button`

`
export default enhanceElement(Button)