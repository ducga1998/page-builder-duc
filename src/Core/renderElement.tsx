import { Subscribe, Provider } from "unstated-x";
import { storeElement } from "../Container/BaseContainer";
import common from "../Element/common";
import * as React from "react";

// when element 
export default function renderElement(idElement , parentId = '' ) {
    const container = storeElement.get(idElement)
    if(!container) return null
    const { type } = container.state
    const Element = common[type]
    return <Subscribe to={[container]} key={idElement}>
            { 
                elementContainer => {
                elementContainer.state.parentId  =parentId
                const {id , children, data, styles } = elementContainer.state
                const props = { ...Element.defaultProps, ...{elementContainer}, }
                return <Element {...props} >
                    {children.map((childId: string) => renderElement(childId,idElement))}
                </Element>
             

            }}
        </Subscribe>
    
}

window['renderTest'] = renderElement
