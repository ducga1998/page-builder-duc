import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
class Text extends React.Component {
    static type = 'Text'
    render() {
        return <$Span contentEditable={true}>cascdskjcasmcmaslash</$Span>
    }
}
const $Span = styled.div`

`
export default enhanceElement(Text)