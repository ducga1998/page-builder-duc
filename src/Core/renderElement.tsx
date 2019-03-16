import { Subscribe} from "unstated-x";
import Element  from '../Element/common'
import { storeElement } from "../Container/BaseContainer";
import common from "../Element/common";

// when element 
export default function renderElement( idElement, parentId){ 
    // const  {id , children}     =   containerElement.state.id
    const elementContainer = storeElement.get(idElement) 
    const {type , data   , children } = elementContainer.state
    const instanceElement  = common[type]
    return <Subscribe to={[elementContainer]}>
        {( ) => {
            if(children  ==0 ){
                return instanceElement
            }
            return children.map(child => {
                return renderElement(child ,idElement )
            })
        }}
    </Subscribe>
}

