import * as React from 'react'
import enhanceElement from '../../../Core/enhanceElement';
import styled from 'styled-components';
class Text extends React.Component {
    render() {
        return <Span ContentEditable />
    }
}
const Span = styled.span`
`
export default enhanceElement(Text)