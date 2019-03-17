import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
interface IText {
    value : string
}
class Text extends React.Component<IText> {
    refText :HTMLElement
    static defaultProps  ={
        value : 'Text'
    }
    static type = 'Text'
    componentDidMount(){
        this.refText.innerHTML = this.props.value
    }
    render() {
    
        console.log('props text', this.props)
        return <$Span 
         contentEditable
        ref={e => this.refText = e}
         >
         {this.props.value}
         </$Span>
    }
}
const $Span = styled.div`

`
export default enhanceElement(Text)