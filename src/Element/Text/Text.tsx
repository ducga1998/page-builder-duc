import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
class Text extends React.Component {
    static type = 'Text'
    render() {
        return <$Span contentEditable={true}>cascash</$Span>
    }
}
const $Span = styled.span`
`
export default enhanceElement(Text)