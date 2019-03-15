import { Subscribe } from "unstated-x";

export default function enhanceElement(Element){
    return class extends Element{
    
        render(){
            return <Subscribe to={elementContainer} >
            {
                () => {
                    return <Element />
                }
            }
        </Subscribe>
            // return <Element test="duc" />
        }
    }
}