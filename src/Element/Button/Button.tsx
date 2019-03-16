import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import { StyledOutlineButton } from '../../Components/styled/button';
class Button extends React.Component {
    static type = 'Button'
    render() {
        return <StyledOutlineButton>{this.props.children} </StyledOutlineButton>
    }
}

export default enhanceElement(Button)