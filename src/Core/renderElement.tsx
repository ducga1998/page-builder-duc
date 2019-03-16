import { Subscribe, Provider } from "unstated-x";
import { storeElement } from "../Container/BaseContainer";
import common from "../Element/common";
import * as React from "react";

// when element 
export default function renderElement(idElement ) {
    const elementContainer = storeElement.get(idElement)
 
    const { type, data, styles, children } = elementContainer.state
    const Element = common[type]
    if (children && children.length > 0) {
        return children.map(child => {
            return <Element>{renderElement(child )}</Element> 
        })
    }
    return <Subscribe to={[elementContainer]}>
            {eleContainer => {
                const props = { ...Element.defaultProps, ...eleContainer.state }
                return <Element
                 {...props} 
                 />

            }}
        </Subscribe>
    
}

window['renderTest'] = renderElement
