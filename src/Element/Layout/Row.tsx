import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
class Row extends React.Component {
    static type = 'Row'
    render() {
        console.log('this.props.children', this.props.children)
        if (React.Children.count(this.props.children) === 0) {
            return <$Row className="row" center>
                Row
        </$Row>
        }
        return <$Row className="row">
            {this.props.children}
        </$Row>
    }
}
const $Row = styled.div<any>`
padding : 20px;
background : #f5f5f5;
${props => props.center ? `display :flex;justify-content : center;align-items : center;color ; #efefed` : ''}
`
export default enhanceElement(Row)