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
                <UIField><ControlInput bind="style.paddingTop" /></UIField>
                <UIField vectical>
                    <ControlInput bind="style.paddingLeft" style={{flex: '4'}} />
                    <ControlInput bind="style.padding" style={{flex: '4'}} />
                    <ControlInput bind="style.paddingRight" style={{flex: '4'}} />
                </UIField>
                <UIField><ControlInput bind="style.paddingBottom" /></UIField>
            </UIField>
        </>
    }
}

export default UIFieldResouce