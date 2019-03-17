import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import styled from 'styled-components';
// import { Button } from 'react-native';
class Section extends React.Component {
    static type = 'Section'
    render() {
        console.log('section children',this.props.children)
        return <$Section>
            {this.props.children} 
        </$Section>
    }
}
const $Section = styled.div`
    padding : 40px;
    background : gray;
    border: 1px dashed ${props => props.theme.bg.default    }
`
export default enhanceElement(Section)