import { Subscribe} from "unstated-x";
import Element  from '../Element/common'
import { storeElement } from "../Container/baseContainer";

// when element 
export default function renderElement( containerElement, parentId){ 
    const  {id , children}     =   containerElement.state.id

    storeElement.get(parentId)
    return  children.map(idChildren => {
        cont 
        return renderElement()
    })
}

