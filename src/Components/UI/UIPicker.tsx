import { SketchPicker } from 'react-color';

import * as React from 'react'
import { Input } from '../styled/base';
import styled from 'styled-components';


interface IUIPicker {
    value : string
    onChange : (e : any) => any
}
export default class UIPicker extends React.Component<IUIPicker> {
        handleOnChange  = (obj) => {
            console.log('okocascas',this.props.value)
            this.props.onChange(obj.hex)
        }
    render(){
        const {value , onChange} = this.props
        return <SketchPicker value={value}  onChange ={this.handleOnChange}/>
    }
}

const $Input = styled(Input)`
width : auto;
`