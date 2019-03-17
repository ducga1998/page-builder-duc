import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
import { AnyNsRecord } from 'dns';
import { Subscribe } from 'unstated-x';
import UIInput from '../../Components/UI/UIInput';
import UIFieldAlgin from '../../Components/UI/UIFieldAlgin';
interface IText {
    value : string
    elementContainer :any
}
class Text extends React.Component<any> {
    refText :any
    static defaultProps  ={
        value : 'value'
    }
    static type = 'Text'
    static InspectorDuc(container){
        return {
            general : <div>
                <Subscribe to={[container]}>
                    {
                        (con) => {
                            const {data : {value}} = container.state
                            return <> <UIFieldAlgin horizontal><UIInput  value={value} onChange={
                                (value : string) =>{
                                    // console.log('target',even)
                                    con.setState({data : {
                                        value 
                                    }})
                                }
                            } />
                             <UIInput type="text" value={value} onChange={
                                (value : string) =>{
                                    // console.log('target',even)
                                    con.setState({data : {
                                        value 
                                    }})
                                }
                            } />
                             <UIInput type="text" value={value} onChange={
                                (value : string) =>{
                                    // console.log('target',even)
                                    con.setState({data : {
                                        value 
                                    }})
                                }
                            } />
                             <UIInput type="text" value={value} onChange={
                                (value : string) =>{
                                    // console.log('target',even)
                                    con.setState({data : {
                                        value 
                                    }})
                                }
                            } />

                             <UIInput type="text" value={value} onChange={
                                (value) =>{
                                    // console.log('target',even)
                                    con.setState({data : {
                                        value 
                                    }})
                                }
                            } />
                            </UIFieldAlgin>
                            </>
                        }
                    }
                </Subscribe>
            </div>
        } 
    }
    componentDidUpdate(){
        this.props.elementContainer.state.domElement.innerHTML = this.props.elementContainer.state.data.value
    }
    onChangeText = (event) => {
        console.log(event.target.innerHTML)
        const value = event.target.innerHTML
        this.props.elementContainer.setState({data : {value}  })
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
         {this.props.elementContainer.state.data.value}
         </$Span>
    }
}
const $Span = styled.div`

`
export default enhanceElement(Text)