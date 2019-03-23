import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import styled from 'styled-components';
import { Subscribe } from 'unstated-x';
// import React from 'react';
import { SketchPicker } from 'react-color';
import { SubscribeStyle } from '../../Container/StyleContainer';
import UIInput from '../../Components/UI/UIInput';
import { ContainerContext } from '../../Core/Binding';
class Tabs extends React.Component {
    static type = 'Tab'
    static get InspectorDuc() {
        return {
            general: null
        }
    }
    render() {
        return null
    }
}
const $Tabs = styled.div<any>`
 
`
export default enhanceElement(Tabs)