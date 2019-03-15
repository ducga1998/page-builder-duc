import { storeElement } from './BaseContainer';
import {SubscribeOne , Container } from 'unstated-x'
import HistoryContainer from './HistoryContainer';
/* 
    struct element    this.state = {
        data : Container => {
            state : {
                ...defaultProps 
            }
        },
        style : Container => {
            
        }
    }
*/
class ElementContainer extends HistoryContainer {
    
    constructor(state){
        super(state);
        
    }   
    setState(state, callback){
        return super.setState(state,callback)
    }
    addItem(idItem ,parentId){
        const parentContainer = storeElement.get(parentId)
        
    }
    
    setStyle(){

    }
    getStyle() {

    }

}
export default ElementContainer