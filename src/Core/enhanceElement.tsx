import { Subscribe } from "unstated-x";
// it' s will wrap all element 
import * as React from 'react'
export default function enhanceElement(Element){
    return class extends Element{
        render(){
            const instance = super.render()
            console.log('this.props', this.props)
            const { id , type , chidlren} = this.props
            const props = {
                'data-element': id ,'data-type':type ,draggable : true
            }
            console.log('{...this.props , ...props}',{...this.props , ...props})
            return React.cloneElement(instance  , {...this.props , ...props})
            
        }
    }
}