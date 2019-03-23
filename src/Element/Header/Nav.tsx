import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import styled from 'styled-components';
import { Subscribe } from 'unstated-x';
// import React from 'react';
import { SketchPicker } from 'react-color';
import { SubscribeStyle } from '../../Container/StyleContainer';
import UIInput from '../../Components/UI/UIInput';
import { ContainerContext, ControlSelect } from '../../Core/Binding';
import UIField from '../../Components/UI/UIField';
type BoostrapType = 'light' | 'dark' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
interface INav {
    bg: any
    expand: boolean,
}
class Nav extends React.Component<INav> {
    static type = 'Nav'
    static defaultProps = {
        expand : true,
        bg : { value: 'dark', label: 'Dark' },
    }
    static get InspectorDuc() {
        return {
            general: <UIField label ="Type nav">
                <ControlSelect bind="data.bg" options={[
                    { value: 'light', label: 'Light' },
                    { value: 'dark', label: 'Dark' },
                    { value: 'primary', label: 'Primary' },
                    { value: 'success', label: 'Success' },
                    { value: 'info', label: 'Info' },
                    { value: 'warning', label: 'Warning' },
                    { value: 'danger', label: 'Danger' },
                ]} />
            </UIField>
        }
    }
    get className() {
        const { bg, expand } = this.props
        return `navbar ${bg ? 'bg-' + bg.value : ''} ${expand ? 'navbar-expand' : ''} navbar-dark`
    }
    render() {
        return <$Nav className={this.className}>
            {this.props.children}
        </$Nav>
    }
}
const $Nav = styled.div`
`
export default enhanceElement(Nav)