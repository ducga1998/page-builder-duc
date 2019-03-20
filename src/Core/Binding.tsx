import {  SubscribeOne } from "unstated-x";
import { storeElement } from "../Container/BaseContainer";
import * as React from "react";
import workspaceContainer from "../Container/WorkspaceContainer";
import UIInput from "../Components/UI/UIInput";
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
    return  ({bind} : {bind : string}) => {
        const [key , value ] = bind.split('.')
        return <ContainerContext.Consumer>
            {
                container => {
                    
                    return <UI onChange={valueUI => {
                        if(key === 'style'){
                            container.setStyle({[value] : valueUI})
                        }
                        else if(key === 'data') {
                            container.setState({[value] : valueUI})
                        }
                    }} />
                }
            }
            </ContainerContext.Consumer>
    }
    
}
export const ControlInputStyle = BindControl(UIInput)
// set style complete => save it and update it