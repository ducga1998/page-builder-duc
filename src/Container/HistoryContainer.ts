
import BaseContainer from './BaseContainer';
// we have 2 array is undo and redo => 
// 

class HistoryManager {
    undo = []
    redo = []
    undoAction = () => {
        if (this.undo.length > 0) {
            const action = this.undo.pop() as any
            action.target.restoreState(action.prevState)
        }
    }
    redoAction = () => {
        if (this.undo.length > 0) {
            const action = this.undo.pop() as any
            action.target.restoreState(action.nextState)
        }
    }
    push(action) {
        this.undo.push(action)
    }
}
class HistoryContainer extends BaseContainer {
    historyMn = historyManager


    constructor(state) {
        super(state);
    }

    setState(state, callback) {
        const nextState = state
        const prevState = { [Object.keys(state)[0]]: this.state[Object.keys(state)[0]] }
        // Object.keys[value]
        const action = { target: this, nextState, prevState }
        this.historyMn.push(action)
        return super.setState(state, callback)
    }
    restoreState(state, callback) {
        return super.setState(state)
    }
}
export const historyManager = new HistoryManager()
window["historyM"] = historyManager
export default HistoryContainer