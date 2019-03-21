
// it' s will wrap all element 
import * as React from 'react'
import omit from 'lodash'
export default function enhanceElement(Element) {
    return class extends Element {
        render() {
            let { elementContainer , elementContainer : {state : { id, type, data ,className }} } = this.props
            const instance = super.render()
            elementContainer.state.componentStyle  =  instance.type.componentStyle
            const {children} = instance.props 
            className = instance.props.className +' '+ className
            const props = {
                ...{
                    'data-element': id,
                    'data-type': type,
                    className,
                    draggable: Element.type !== 'Text',
                    // instanceElement: instance,
                    onChange: elementContainer.setState,
                    ref : e => elementContainer.state.domElement = e,
                    
                },
                ...this.props,
                ...{children},
                key : id
            }
            return React.cloneElement(instance, props)

        }
    }
}