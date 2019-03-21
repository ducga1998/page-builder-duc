import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement'
class Text extends React.Component<any> {
    refText: any
    static defaultProps = {
        value: 'value'
    }
    static type = 'Text'
    static get InspectorDuc() {
        return {
            general: <div></div>
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
        return <$Span
            contentEditable
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