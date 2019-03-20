import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import { StyledOutlineButton } from '../../Components/styled/button';
import { Subscribe } from 'unstated-x';
import { SubscribeStyle } from '../../Container/StyleContainer';
class Button extends React.Component {
    static type = 'Button'
    static InspectorDuc(container){
        return {
            general : <div>
                <Subscribe to={[container]}>
                    {
                        () => {
                            const {value} = container.state
                            return  <input type="text" value={value} onChange={
                                ({value} : any) =>{
                                    container.setState({value})
                                }
                            } />
                        }
                    }
                </Subscribe>
                {/* <SubscribeStyle to={[container]}>
                    {(container ,  css) => {
                        return   <input type="text"  onChange={
                            ({value} : any) =>{
                                container.setStyle({value})
                            }
                        } />
                    }}
                </SubscribeStyle> */}
            </div>
        } 
    }
    render() {
        return <StyledOutlineButton>{this.props.children} </StyledOutlineButton>
    }
}

export default enhanceElement(Button)