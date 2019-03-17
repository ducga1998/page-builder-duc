import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import { StyledOutlineButton } from '../../Components/styled/button';
import { Subscribe } from 'unstated-x';
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
            </div>
        } 
    }
    render() {
        return <StyledOutlineButton>{this.props.children} </StyledOutlineButton>
    }
}

export default enhanceElement(Button)