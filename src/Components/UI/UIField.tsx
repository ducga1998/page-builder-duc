
import * as React from "react";
import { Label, H2, FlexCol , FlexRow } from "../styled/base";
interface IUIField {
    label?: string,
    children: any,
    vectical? :boolean,
    horizontal?:boolean
}
export default class UIField extends React.Component<IUIField> {
    render() {
        const WrapperFlied  = this.props.vectical ? FlexRow:FlexCol  as any
        const { label, children } = this.props
        return <WrapperFlied style={{    borderBottom: '1px solid #b2b1c3'}}>
               {label?<Label>{label}: </Label>:null} 
                    {children}
            </WrapperFlied>
        
    }
}