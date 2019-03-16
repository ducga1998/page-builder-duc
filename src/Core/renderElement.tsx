import { Subscribe, Provider } from "unstated-x";
import { storeElement } from "../Container/BaseContainer";
import common from "../Element/common";
import * as React from "react";

// when element 
export default function renderElement(idElement ) {
    const elementContainer = storeElement.get(idElement)
    if(!elementContainer) return null
    const { type, data, styles, children } = elementContainer.state
    const Element = common[type]
    return <Subscribe to={[elementContainer]} key={idElement}>
            {eleContainer => {
                const {id , type, } = eleContainer.state
                const props = { ...Element.defaultProps, ...{id , type ,data }, }
                return <Element {...props}>
                    {children.map((childId: string) => renderElement(childId))}
                </Element>
             

            }}
        </Subscribe>
    
}

window['renderTest'] = renderElement
