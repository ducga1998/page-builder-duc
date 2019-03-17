
// it' s will wrap all element 
import * as React from 'react'
import ReactDOM from 'react-dom';
export default function enhanceElement(Element){
    return class extends Element{
        render(){
            const {elementContainer} = this.props
            const instance = super.render()
            console.log('this.props', this.props)
            const { id , type , chidlren  ,parentId} = elementContainer.state
            // const dom  = ReactDOM.findDOMNode(this.props.chidlren)
            // console.log('dom enhance element',dom)
            const props = {
                'data-element': id ,
                'data-type':type ,
                draggable : Element.type !== 'Text',
                ref  : e => elementContainer.state.domElement  = e
            }
            console.log('instance.props',instance.props)
            return React.cloneElement(instance  , {  ...props , ...this.props , ...instance.props       })
            
        }
    }
}