import { Container } from 'unstated-x'
import BaseContainer, { storeElement } from './BaseContainer';
class WorkspaceContainer extends BaseContainer {
 state = {
     selected : [],
 }
 setState(state , callback?){
     console.log('state selected', state)
     window['selected'] = storeElement.get(state['selected'][0])
     return  super.setState(state,  callback)
 }
}
const workspaceContainer = new WorkspaceContainer({
    selected : []
})
window['ws'] = workspaceContainer
export default workspaceContainer