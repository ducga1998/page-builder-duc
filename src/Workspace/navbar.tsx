import * as React from 'react';
import { Nav, LogoLink, IconLink, Label } from '../Components/styled/nav';
import styled from 'styled-components';
import Icon from '../Components/Icon';
class Navbar extends React.Component<any> {
    state = {
        sideBarOpen: false,
        notificationOpen: false
    }
    render() {
        const {active , onChange} = this.props
        return <Nav>
            <Nav>
             {
    
                  [{name : 'edit',icon:"edit"} , {name : 'view' , icon: 'view-forward'} ].map(item  => {
                    return   <NavButton  >
                    <IconLink 
                    data-active={item.name === active}
                    onClick={() => {
                        onChange(item.name)
                    }}
                    ><Icon glyph={item.icon} /> {item.name} </IconLink>
                </NavButton>
                })
             }
               
            </Nav>
           {this.props.active === 'view'?  <Nav>
            <NavButton  >
                    <IconLink 
                    > Copy Code  </IconLink>
                </NavButton>
            </Nav>: null}
            
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