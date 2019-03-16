import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import { StyledOutlineButton } from '../../Components/styled/button';
class Button extends React.Component {
    render() {
        return <StyledOutlineButton>Button </StyledOutlineButton>
    }
}

export default enhanceElement(Button)