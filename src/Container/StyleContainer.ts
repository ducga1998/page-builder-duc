import React from 'react';
import { Container } from 'unstated-x';
class StyleContainer extends Container<any> { 
    
    setStyle() {    
        
    }
    getStyle() {
        
    }
}
export class SubscribeStyle extends React.Component<{children :any , to  : any , bind : string}>{
    rule = this.props.to.getStyle
    onUpdate = () => {
        this.forceUpdate()
    }
    componentDidMount = () => {
        this.props.to.subscribeStyle(this.onUpdate)
    }
    componentWillUnmount(){
           this.props.to.unSubscribeStyle(this.onUpdate)
    }
    render(){
        return this.props.children( this.props.to , this.rule )
    }
}

export default StyleContainer