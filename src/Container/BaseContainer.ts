import { Container } from 'unstated-x'
import uuid from 'uuid'
export const storeElement  = new Map()
class BaseContainer extends Container<any> {
    undo  = []
    redo  = []
    constructor(state){
        super(state);
        const id  = uuid()
        storeElement.set(id , this)
    }   
    setState(state, callback){
       return  super.setState(state, callback)
    }
}
export default BaseContainer
window['ducstoreElement'] = storeElement