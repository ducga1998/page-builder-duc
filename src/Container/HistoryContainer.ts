import { Container } from 'unstated-x'
import BaseContainer from './baseContainer';
// we have 2 array is undo and redo => 
// 
class HistoryContainer extends BaseContainer {
    undo  = []
    redo  = []
    constructor(state){
        super(state);

    } 

    setState(state, callback){
       return  super.setState(state, callback)
    }
}
export default HistoryContainer