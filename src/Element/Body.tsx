import * as React from 'react'
import enhanceElement from '../Core/enhanceElement';
import styled from 'styled-components';
class Body extends React.Component {
    static type = 'Body'
    render() {
        return <div>

        </div>
    }
}
const Span = styled.span`
`
export default enhanceElement(Body)