import { Container } from 'unstated-x'
import uuid from 'uuid'
export const storeElement  = new Map()
/* 
    baseContainer help me  save all elemenet inited into storeElement
*/
class BaseContainer extends Container<any> {
   
    constructor(state){
        super(state);
        const id  = uuid()
        this.state = {...state , ...{id}}
        storeElement.set(id , this)
    }   
    setState(state, callback){
       return  super.setState(state, callback)
    }
}
export default BaseContainer
window['ducstoreElement'] = storeElement