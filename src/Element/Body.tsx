import * as React from 'react'
import enhanceElement from '../Core/enhanceElement';
import styled from 'styled-components';
import Logo from '../Workspace/logo';
class Body extends React.Component {
    static type = 'Body'
    render() {
        console.log('children',React.Children.count(this.props.children),this.props.children)
        if(React.Children.count(this.props.children)  === 0 ){
            return <$Body center > 
                <Logo />
            </$Body>
        }
        return <$Body>
            {this.props.children}
        </$Body>
    }
}
const $Body = styled.div<any>`
/* padding : 40px; */
background : #f5f5f5;
height : 100%;
width : 100%;

${props => props.center && `display : flex;justify-content : center;
align-items : center;`}
`
export default enhanceElement(Body)