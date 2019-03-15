import { Container } from 'unstated-x'
// we have 2 array is undo and redo => 
// 
class HistoryContainer extends Container<any> {
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