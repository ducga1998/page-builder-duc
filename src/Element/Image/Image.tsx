import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
import UIField from '../../Components/UI/UIField';
import { ControlInput } from '../../Core/Binding';
interface IPicture   {
    src : string,
    size : 'lg'| 'md'| 'sm'
}
const options = [
    { value: '200px', label: 'Small  size' },
    { value: '400px', label: 'Medium size' },
    { value: '600px', label: 'Large Size' }
]
class Image extends React.Component<IPicture> {
    static type = 'Image'
    static defaultProps = {
        src : ''
    }
    static get InspectorDuc() {
        return {
            general: <><UIField label ="Src Image">
               <ControlInput bind="data.src" placeholder="Paste Link image to you can view for here" />
            </UIField>
            <UIField label="Dimesion" >
                <UIField label="Width"  >
                <ControlInput bind="style.width" />
                </UIField>
                <UIField label="Height" >
                <ControlInput bind="style.height"  />
                </UIField>
            </UIField>
            </>
        }
    }
    render() {
        const {size, src} = this.props ;
        if(src.length === 0  ){
           return <Div > Please paste link image you can view in input in inspector     </Div>
        }
       return  <$Image src={this.props.src} />
    }
}
const Div = styled.div`
height : 300px;
width : 300px;
background : #e0e0e0;
display : flex;
justify-content : center;
align-items : center;
padding : 30px;
text-align : center;
`
const $Image = styled.img`
`
export default enhanceElement(Image)