import {SubscribeOne , Container } from 'unstated-x'
import BaseContainer from './baseContainer'
class ElementContainer extends BaseContainer {
    constructor(state){
        super(state);
    }   
    setState(state, callback){
    return super.setState(state,callback)
    }

}
export default ElementContainer