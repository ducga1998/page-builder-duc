
// it' s will wrap all element 
import * as React from 'react'
export default function enhanceElement(Element){
    return class extends Element{
        render(){
            const {elementContainer} = this.props
            const instance = super.render()
            console.log('this.props', this.props)
            const { id , type , chidlren  ,parentId} = elementContainer.state
            const props = {
                'data-element': id ,
                'data-type':type ,
                draggable : true,
                ref : e => elementContainer.state.domElement = e
                
            }
            console.log('instance.props',instance.props)
            return React.cloneElement(instance  , { ...instance.props , ...props      })
            
        }
    }
}