import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
import placeholder from './placeholder.png'
import UIField from '../../Components/UI/UIField';
import { ControlInput } from '../../Core/Binding';
interface IPicture   {
    src : string,
}
class Image extends React.Component<IPicture> {
    static type = 'Image'
    static defaultProps = {
        src : ""
    }
    static get InspectorDuc() {
        return {
            general: <UIField label ="Src Image">
               <ControlInput bind="data.src"  />
            </UIField>
        }
    }
    render() {
        console.log('this.props.src',this.props.src)
        if(this.props.src === ''){
            return <$Image width="300px" height="300px"  src={placeholder}/>
        }
       return  <$Image src={this.props.src} />
    }
}
const $Image = styled.img<any>`
    background : #f5f5f5;
    margin : 0px;
    ${props => props.center ? `display :flex;justify-content : center;align-items : center;color ; #efefed` : ''}
`
export default enhanceElement(Image)