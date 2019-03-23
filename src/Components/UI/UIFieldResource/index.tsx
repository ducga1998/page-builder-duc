import * as React from 'react'

import { ControlInput } from '../../../Core/Binding'
import UIField from '../UIField'
function UIFieldResouce() {
    return {
        general: null,
        style : <>
            <UIField  label="Background">
                <ControlInput bind="style.background" />
            </UIField>
            <UIField label="Padding(It is BoxModel)" horizontal>
                <UIField><ControlInput bind="style.paddingTop"  /></UIField>
                <UIField vectical>
                    <ControlInput bind="style.paddingLeft"  style={{width : '100px'}}  />
                    <ControlInput bind="style.padding" style={{width : '100px'}} />
                    <ControlInput bind="style.paddingRight" style={{width : '100px'}} />
                </UIField>
                <UIField><ControlInput bind="style.paddingBottom"  /></UIField>
            </UIField>
            <UIField  label="Width and height">
                <ControlInput bind="style.width" />
                <ControlInput bind="style.height" />
            </UIField>
        </>
    }
}

export default UIFieldResouce