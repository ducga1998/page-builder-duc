import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import styled from 'styled-components';
// import { Button } from 'react-native';
class Section extends React.Component {
    static type = 'Section'
    render() {
        return <$Section>
            {this.props.children} 
        </$Section>
    }
}
const $Section = styled.div`
    padding : 40px;
    background : red;
`
export default enhanceElement(Section)