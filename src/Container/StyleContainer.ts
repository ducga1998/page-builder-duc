
import BaseContainer from './BaseContainer';
import React from 'react';
import { Container } from 'unstated-x';
class StyleContainer extends Container<any> { 
    
    setStyle() {    
        
    }
    getStyle() {

    }
}
export class SubscribeStyle extends React.Component<{children :any , to  : any}>{
    componentDidMount(){

    }
    componentDidUpdate(){
        this.props.to.state._listenersStyle.push('ok')
    }
    render(){
            return this.props.children('a' , 'b')
    }
}

export default StyleContainer