import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import { StyledOutlineButton } from '../../Components/styled/button';
import { Subscribe } from 'unstated-x';
import { SketchPicker } from 'react-color';
import { ControlInput, ContainerContext, ControlSelect } from '../../Core/Binding';
import { SubscribeStyle } from '../../Container/StyleContainer';
import UIInput from '../../Components/UI/UIInput';
import UIField from '../../Components/UI/UIField';
import styled from 'styled-components';

const options = [
    { value: 'danger', label: 'Danger Button' },
    { value: 'default', label: 'Default Button' },
    { value: 'success', label: 'Success Button' },
    { value: 'dark', label: 'Dark Button' },
    { value: 'info', label: 'Info Button' },
    { value: 'light', label: 'Light Button' },
     { value: 'warning', label: 'Warning Button' }
]
class Button extends React.Component<any> {
    static type = 'Button'
    static defaultProps = {
        categoryButton:  { vaue: 'default', label: 'Default Button' },
        ouline: false
    }
    static get InspectorDuc() {
        return {
            general:<ContainerContext>
                {
                    con => {
                        return <Subscribe to={[con]}>
                            {() => {
                                return  <UIField>
                                <UIField label="Category">
                                    <ControlInput bind="data.categoryButton" />
                                </UIField>
                                <UIField label="Value">
                                    <ControlInput bind="data.value" />
                                </UIField>
                                <UIField label="Category">
                               <ControlSelect  options ={options} bind="data.categoryButton" value={con.state.data.categoryButton}  />
                                </UIField>
                            </UIField>
                            }}
                        </Subscribe>
                    }
                }
            </ContainerContext>
        }
    }
    render() {
        const { ouline, categoryButton } = this.props
        console.log('categoryButton',categoryButton)
        // const {elementContainer :{state : {data : {categoryButton}}}} = this.props
        return <$Button className={`btn btn${ouline ? '-outline' : ''}-${categoryButton['value']}`}>{this.props.children} </$Button>
    }
}
const $Button = styled.button`

`
export default enhanceElement(Button)