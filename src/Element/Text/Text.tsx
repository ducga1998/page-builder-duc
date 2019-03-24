import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement'
import UIField from '../../Components/UI/UIField';
import { ControlInput } from '../../Core/Binding';
class Text extends React.Component<any> {
    refText: any
    static defaultProps = {
        value: 'value'
    }
    static type = 'Text'
    static get InspectorDuc() {
        return {
            general: <UIField>
                <ControlInput bind="data.value" />
                {/* <ControlInput bind="data.categoryButton" /> */}
            </UIField>
        }
    }
    componentDidUpdate() {
        this.props.elementContainer.state.domElement.innerHTML = this.props.elementContainer.state.data.value
    }
    onChangeText = (event) => {
        console.log(event.target.innerHTML)
        const value = event.target.innerHTML
        this.props.elementContainer.setState({ data: { value } })
    }
    render() {
        const {mode}  = this.props
        return <$Span
            contentEditable={mode === 'edit'? true : false}
            suppressContentEditableWarning
            onMouseDown={e => {
                //  e.preventDefault()
            }}
            onInput={this.onChangeText}

        >
            {this.props.elementContainer.state.data.value}
        </$Span>


    }
}
const $Span = styled.div<any>`

`
export default enhanceElement(Text)