import {  SubscribeOne, Subscribe } from "unstated-x";
import { storeElement } from "../Container/BaseContainer";
import * as React from "react";
import workspaceContainer from "../Container/WorkspaceContainer";
import UIInput from "../Components/UI/UIInput";
import { SubscribeStyle } from "../Container/StyleContainer";
export const ContainerContext = React.createContext(null) as any
// it's use to share container => it 's render and use file app.tsx 
export function ContainerShare({children}) {
    return  <SubscribeOne to={workspaceContainer} bind={['selected']}>
        {
            (ws) => {
                const id = ws.state.selected[0]
                const elementContainer = storeElement.get(id)
                console.log('update ws ===> selected ' , id)
                return <ContainerContext.Provider value={elementContainer} >
                        {children}
                </ContainerContext.Provider>
            }
        }
    </SubscribeOne>
}
// function use improve scalalbe for project 
export default function BindControl(UI) { 
    return  ({bind} : any) => {
        const [key , value ] = bind.split('.')
        return <ContainerContext.Consumer>
            {
                container => {
                    const {domElement , id} = container.state
                    if(key === 'style'){
                        return <SubscribeStyle to={container} bind={''} key={id}>
                            {
                                (con , styleCom)=> {
                                    return <UI onChange={valueUI => {
                                            container.setStyle({[value] : valueUI})
                                        
                                    }}  
                                    placeholder={getComputedStyle(domElement)[value]} 
                                    value={styleCom.style[value]} 
                                    />
                                }
                            }
                        </SubscribeStyle>
                    }
                    else if(key === 'data'){
                        return <UI onChange={valueUI => {
                                        container.setState({[value] : valueUI})
                                }}  
                                value={container.state.data[value]} 
                                />
                          BindControl
                    } 
                }
            }
            </ContainerContext.Consumer>
    }
    
}
export const ControlInput = (UIInput)
// set style complete => save it and update it