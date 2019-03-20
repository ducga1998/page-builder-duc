import { Container } from 'unstated-x'
import BaseContainer from './BaseContainer';
class WorkspaceContainer extends BaseContainer {

 state = {
     selected : [],
 }

}
const workspaceContainer = new WorkspaceContainer({
    selected : []
})
window['ws'] = workspaceContainer
export default workspaceContainer