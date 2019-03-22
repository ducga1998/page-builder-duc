import * as React from 'react'
import enhanceElement from '../Core/enhanceElement';
import styled from 'styled-components';
class Input extends React.Component<any> {
    static type = 'Input'
    static defaultProps = {
        value : 'value',
        placeholder : 'ok'
    }
    render() {
       
        return <$Input type="text" />
         
    }
}
const $Input = styled.input`
padding : 40px;

`
export default enhanceElement(Input)