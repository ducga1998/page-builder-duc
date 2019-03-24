import { Subscribe, Provider } from "unstated-x";
import { storeElement } from "../Container/BaseContainer";
import common from "../Element/common";
import uuid from 'uuid'
import * as React from "react";
import { StyleContext } from "../Element/Style";
import { ModeContext } from "../Container/PageContainer";

// when element 
export default function renderElement(idElement, parentId = '') {
    const container = storeElement.get(idElement)
    if (!container) return null
    const { type } = container.state
    const Element = common[type]
    return <ModeContext.Consumer>
        {mode => {
            return <StyleContext.Consumer>
            {
                sheetStyle => {
                    // console.log('sheetsheetsheet',sheetStyle)
                    return <Subscribe to={[container]} key={idElement}>
                        {
                            (elementContainer  :any) => {
                                console.log('mode',mode)
                                const randomString = uuid()
                                const { id, children, data, styles } = elementContainer.state
                                const { className } = elementContainer.state
                                Object.assign(elementContainer.state, {
                                    parentId,
                                    className: className ? className : `pb-duc-${randomString.split('-')[0]}`,
                                })
                                elementContainer.state.data = { ...Element.defaultProps, ...data } || {}
                               
                                elementContainer.setStyle( styles || {})
                                const props = {
                                  ...{  
                                    elementContainer,
                                    ref: e => elementContainer.state.instance = e,
                                    mode
                                },
                                ...elementContainer.state.data
                                }
                                    
                                return <Element {...props} key={id} >
                                    {children.map((childId: string) => renderElement(childId, idElement))}
                                </Element>
    
    
                            }}
                    </Subscribe>
                }}
        </StyleContext.Consumer>
        }}
    </ModeContext.Consumer>

}

window['renderTest'] = renderElement
