import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
import { AnyNsRecord } from 'dns';
interface IText {
    value : string
}
class Text extends React.Component<IText> {
    refText :any
    static defaultProps  ={
        value : 'Text'
    }
    static type = 'Text'
    componentDidMount(){
        console.log('refText',this.refText)
        this.refText.innerHTML = this.props.value
    }
    render() {
        console.log('props text', this.props)
        return <$Span 
         contentEditable
            ref={e => {
                console.log('ewfwe',e)
                this.refText = e
            }}
         >
         {this.props.value}
         </$Span>
    }
}
const $Span = styled.div`

`
export default enhanceElement(Text)