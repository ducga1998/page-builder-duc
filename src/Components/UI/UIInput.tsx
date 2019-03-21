
import * as React from 'react'
import { Input } from '../styled/base';
import styled from 'styled-components';


interface IUIInput {
    onChange: any
    value?: string | number,
    size?: 'xs' | 'ls' | 'sm',
    style?: any,
    placeholder?: string,
    type?: string
    refInput?: any,
    onKeyPress?: (e: any) => any,
    onFocus?: (e: any) => any
    autoFocus?: boolean

}
export default class UIInput extends React.Component<IUIInput> {
    inputRef: any = React.createRef()
    state = {
        isFocusing : false
    }
    componentDidMount() {
        this.inputRef.value = this.props.value || ''
    }
    componentDidUpdate(prevProps){
        const value = this.props.value as string
        console.log('value',value , prevProps.value)
		// const maxLength = this.props.maxLength
		if (value !== prevProps.value) {
            console.log('value',value  || '')
				this.inputRef.value = (value || '')
		}
    }

    handleOnChange = (e) => {
        console.log('this.inputRef.value',this.inputRef.value)
        // this.inputRef.value =  this.props.value
         this.props.onChange(e.target.value)
    }
    handleOnFocus = (callback) => {
        // this.setState({isFocusing : true})
        this.props.onFocus(callback)
    }
    render() {
        const { value, onChange, style, placeholder, type, refInput, onKeyPress, onFocus, autoFocus } = this.props
        console.log('valuevalue',value)
        return <$Input
            ref={e => this.inputRef = e}
            type={type || undefined}
            autoFocus={autoFocus || undefined}
            onKeyPress={onKeyPress}
            placeholder={placeholder || undefined}
            style={style}
            onChange={this.handleOnChange}
            onFocus={onFocus}
        />
    }
}

const $Input = styled(Input)`
width : auto;
`