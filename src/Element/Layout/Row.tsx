import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
class Row extends React.Component {
    static type = 'Row'
    render() {
        console.log('this.props.children',this.props.children)
         return  <$Row className="row">
                {this.props.children}
            </$Row>
    }
}
const $Row = styled.div`
padding : 20px;
background : #f5f5f5;
`
export default enhanceElement(Row)