import { Subscribe } from "unstated-x";
// it' s will wrap all element 
import * as React from 'react'
export default function enhanceElement(Element){
    return class extends Element{
        // componentDidMount(){
        //     console.log('call component didMount')
        //     super.componentDidMount()
        // }
        render(){

            return <Element {...this.props}/>
        }
    }
}