
// it' s will wrap all element 
import * as React from 'react'
export default function enhanceElement(Element) {
    return class extends Element {
        render() {
            const { elementContainer } = this.props
            const instance = super.render()
            const { id, type, data } = elementContainer.state

            const props = {
                ...{
                    'data-element': id,
                    'data-type': type,
                    draggable: Element.type !== 'Text',
                    ref: e => elementContainer.state.domElement = e,
                    instanceElement: instance,
                    onChange: elementContainer.setState
                },
                ...this.props,
                ...instance.props
            }
            return React.cloneElement(instance, props)

        }
    }
}