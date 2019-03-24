
// it' s will wrap all element 
import * as React from 'react'
export default function enhanceElement(Element) {
    return class extends Element {
        render() {
            let { elementContainer , elementContainer : {state : { id, type, data ,className }} } = this.props
            const instance = super.render()
            elementContainer.state.componentStyle  =  instance.type.componentStyle
            const {children} = instance.props 
            className = instance.props.className +' '+ className
            const {mode} = this.props
            const props = {
                ...{
                    'data-element': id,
                    'data-type': type,
                    className,
                    draggable: Element.type !== 'Text' || mode === 'edit' ? true : false,
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