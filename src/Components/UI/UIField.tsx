
import * as React from "react";
import UIInput from "./UIInput";
import { Label, H2, FlexCol } from "../styled/base";
interface IUIField {
    label: string,
    children: any
}
export default class UIField extends React.Component<IUIField> {
    render() {
        const { label, children } = this.props
        return <FlexCol>
                <Label>{label}</Label>
                {children}
            </FlexCol>
        
    }
}