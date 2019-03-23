import * as React from 'react'

import { ControlInput, ControlPicker } from '../../../Core/Binding'
import UIField from '../UIField'
import UIPopup from '../UIPopUp';
import { StyledIconButton } from '../../styled/button';
import Icon from '../../Icon';
import { FlexRow } from '../../styled/base';
function UIFieldResouce() {
    return {
        general: null,
        style : <>
            <UIField  label="Background">
             <FlexRow>  <ControlInput bind="style.background" />
                <UIPopup trigger={ <Icon glyph="plus" />} >
                        <ControlPicker bind="style.background" />
                </UIPopup>
                </FlexRow> 
            </UIField>
            <UIField label="Padding(It is BoxModel for padding)" horizontal>
                <UIField><ControlInput bind="style.paddingTop"  /></UIField>
                <UIField vectical>
                    <ControlInput bind="style.paddingLeft"  style={{width : '100px'}}  />
                    <ControlInput bind="style.padding" style={{width : '100px'}} />
                    <ControlInput bind="style.paddingRight" style={{width : '100px'}} />
                </UIField>
                <UIField><ControlInput bind="style.paddingBottom"  /></UIField>
            </UIField>
            <UIField label="Marign(It is BoxModel for margin)" horizontal>
                <UIField><ControlInput bind="style.marginTop"  /></UIField>
                <UIField vectical>
                    <ControlInput bind="style.marginLeft"  style={{width : '100px'}}  />
                    <ControlInput bind="style.margin" style={{width : '100px'}} />
                    <ControlInput bind="style.marginRight" style={{width : '100px'}} />
                </UIField>
                <UIField><ControlInput bind="style.marginBottom"  /></UIField>
            </UIField>
            
            <UIField label="Dimension" >
                <UIField label="Width"  >
                <ControlInput bind="style.width" />
                </UIField>
                <UIField label="Height" >
                <ControlInput bind="style.height"  />
                </UIField>
            </UIField>
        </>
    }
}

export default UIFieldResouce