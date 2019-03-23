import * as React from 'react';
import { Nav, LogoLink, IconLink, Label } from '../Components/styled/nav';
import Icon from '../Components/Icon';
import styled from 'styled-components';
import { FlexCol } from '../Components/styled/base';
// import { AvatarImage } from 'src/Components/styled/avatar';
class Navbar extends React.Component<any> {
    state = {
        sideBarOpen: false,
        notificationOpen: false
    }
    render() {
        return <Nav>
            <Nav>
                <NavButton  >
                    <IconLink  ><i className="fas fa-pencil-alt" /> OK  </IconLink>
                </NavButton>
                <NavButton  >
                    <IconLink  ><i className="fas fa-pencil-alt" /> HÊHHEE  </IconLink>
                </NavButton>x
            </Nav>
            <Nav>

            </Nav>
        </Nav>
    }
}

const NavButton = styled(LogoLink)`
    position : relative;
`
const Button = styled(IconLink.withComponent('a'))`
    cursor : pointer;

`
export default Navbar