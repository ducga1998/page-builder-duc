import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
class Column extends React.Component<any> {
    static type = 'Column'
    render() {
        if (React.Children.count(this.props.children) === 0) {
            console.log('this.props.children', this.props.children)
            return <$Column className="col-sm" center>
                Column
            </$Column>
        }
        return <$Column className="col-sm">
            {this.props.children}
        </$Column>
    }
}
const $Column = styled.div<any>`
    background : #f5f5f5;
    padding : 20px;
    border: 1px dashed #ccc5c5
    ${props => props.center ? `display :flex;justify-content : center;align-items : center;color ; #efefed` : ''}
`
export default enhanceElement(Column)