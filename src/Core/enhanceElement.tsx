import { Subscribe } from "unstated-x";
// it' s will wrap all element 
import * as React from 'react'
export default function enhanceElement(Element){
    return class extends Element{
        [Symbol.toStringTag] = `PB-duc:: ${ Element.type || Element.name }`
        render(){
            const instance = super.render()
            console.log('this.props', this.props)
            const {id , type} = this.props
            const props = {
                'data-element': id ,'data-type':type ,draggable : true
            }
          
            return React.cloneElement(instance  , props)
            
        }
    }
}