import * as React from 'react'
import enhanceElement from '../Core/enhanceElement';
import styled from 'styled-components';
class Body extends React.Component {
    static type = 'Body'
    render() {
        return <$Body>
            {this.props.children}
        </$Body>
    }
}
const $Body = styled.div`
padding : 40px;
background : #f5f5f5;
`
export default enhanceElement(Body)