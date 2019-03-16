import BaseContainer, { storeElement } from './BaseContainer';
import {SubscribeOne , Container } from 'unstated-x'
class ElementContainer extends BaseContainer {
    
    constructor(state){
        super(state);
        
    }   
    setState(state, callback){
        return super.setState(state,callback)
    }
    addItem(idItem ,parentId){
        const parentContainer = storeElement.get(parentId)
        
    }
    setStyleString() {
        return  () => {
            console.log('nguyen minh duc')
        }
    }
    setStyle(){

    }
    getStyle() {

    }

}
export default ElementContainer