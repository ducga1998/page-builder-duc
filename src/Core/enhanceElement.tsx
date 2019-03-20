
// it' s will wrap all element 
import * as React from 'react'
export default function enhanceElement(Element) {
    return class extends Element {
        render() {
            const { elementContainer , elementContainer : {state : { id, type, data ,className }} } = this.props
            const instance = super.render()
            elementContainer.state.componentStyle  =  instance.type.componentStyle
            // console.log('instance classnmae',)
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
                ...instance.props
            }
            return React.cloneElement(instance, props)

        }
    }
}