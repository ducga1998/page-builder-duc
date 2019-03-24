import * as React from 'react';
import { Nav, LogoLink, IconLink, Label, Logo } from '../Components/styled/nav';
import styled from 'styled-components';
import Icon from '../Components/Icon';
import { toast } from 'react-toastify';
import { H2 } from '../Components/styled/base';
class Navbar extends React.Component<any> {
    state = {
        sideBarOpen: false,
        notificationOpen: false
    }
    handleCopy = () => {
        const domBody = document.querySelector('[data-type="Body"]')
        const htmlBody  = domBody.innerHTML
      
        let css = ''
        Array.from(document.styleSheets[2]['cssRules']).map((item:any) =>{ css +=item.cssText})
        Array.from(document.styleSheets[4]['cssRules']).map((item:any) =>{ css +=item.cssText})
        const htmlPage = `
       <html lang="en" class="gr__localhost">
       <head>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
       <style>${css}</style>
       
       </head>
       <body>
       ${htmlBody}
       </body>
       
       </html>`
        var el = document.createElement('textarea') as any
        // Set value (string to be copied)
        el.value = htmlPage;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
        toast.success(<H2>😎😎😎😎You copy html and css success, now please paste it in file html anyone and run it =))), thanks youuuuuuuuuuuuuuuu</H2>,{
            position : toast.POSITION.TOP_RIGHT
        })
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
            <NavButton   onClick={this.handleCopy}  >
          
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