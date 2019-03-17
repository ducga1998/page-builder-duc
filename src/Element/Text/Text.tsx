import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
import { AnyNsRecord } from 'dns';
import { Subscribe } from 'unstated-x';
interface IText {
    value : string
    elementContainer :any
}
class Text extends React.Component<IText> {
    refText :any
    static defaultProps  ={
        value : 'Text'
    }
    static type = 'Text'
    static InspectorDuc(container){
        return {
            general : <div>
                <Subscribe to={[container]}>
                    {
                        () => {
                            const {value} = container.state
                            return  <input type="text" value={value} />
                        }
                    }
                </Subscribe>
            </div>
        } 
    }
    componentDidMount(){
        console.log('refText',this.refText)
        // this.refText.innerHTML = this.props.value
    }
    onChangeText = (event) => {
        console.log(event.target.innerHTML)
        const value = event.target.innerHTML
        this.props.elementContainer.setState({value  })
    }
    render() {
        console.log('props text', this.props)
        return <$Span 
         contentEditable
         onMouseDown ={e =>{
            //  e.preventDefault()
         }}
         onInput={this.onChangeText}
         >
         {this.props.value}
         </$Span>
    }
}
const $Span = styled.div`

`
export default enhanceElement(Text)