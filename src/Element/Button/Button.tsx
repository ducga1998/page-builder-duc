import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import { StyledOutlineButton } from '../../Components/styled/button';
import { Subscribe } from 'unstated-x';
import { SketchPicker } from 'react-color';
import { ControlInput, ContainerContext } from '../../Core/Binding';
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
            general: <UIField>
                <ControlInput bind="data.categoryButton" />
                <ControlInput bind="data.value" />
            </UIField>, 
        }
    }
    render() {
        const {elementContainer :{state : {data : {categoryButton}}}} = this.props
        return <$Button className={`btn btn-outline-${categoryButton}`}>{this.props.children} </$Button>
    }
}
const $Button = styled.button`

`
export default enhanceElement(Button)