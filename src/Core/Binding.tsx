import {  SubscribeOne, Subscribe } from "unstated-x";
import { storeElement } from "../Container/BaseContainer";
import * as React from "react";
import workspaceContainer from "../Container/WorkspaceContainer";
import UIInput from "../Components/UI/UIInput";
import { SubscribeStyle } from "../Container/StyleContainer";
import UISelect from "../Components/UI/UISelect";
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
    return  (props : any) => {
        const [key , value ] = props.bind.split('.')
        return <ContainerContext.Consumer>
            {
                container => {
                    const {domElement , id} = container.state
                    if(key === 'style'){
                        return <SubscribeStyle to={container} bind={''} key={id}>
                            {
                                (con , styleCom)=> {
                                    return <UI {...props}onChange={valueUI => {
                                            container.setStyle({[value] : valueUI})
                                        
                                    }}  
                                    placeholder={domElement ?getComputedStyle(domElement)[value]: ''} 
                                    value={styleCom.style[value]} 
                                    />
                                }
                            }
                        </SubscribeStyle>
                    }
                    else if(key === 'data'){
                        return <UI  {...props} onChange={valueUI => {
                                const {data } = container.state
                                        container.setState({data : {...data ,...{[value] :valueUI} }})
                                }}  
                                value={container.state.data[value]} 
                                />
                    } 
                }
            }
            </ContainerContext.Consumer>
    }
    
}
export const ControlInput = BindControl(UIInput)
export const ControlSelect = BindControl(UISelect)
// set style complete => save it and update it