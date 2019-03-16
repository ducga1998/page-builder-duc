import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
class Text extends React.Component {
    render() {
        return <$Span contentEditable={true} />
    }
}
const $Span = styled.span`
`
export default enhanceElement(Text)