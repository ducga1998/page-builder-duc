import { Subscribe } from "unstated-x";
// it' s will wrap all element 
export default function enhanceElement(Element){
    return class extends Element{
        render(){
            console.log('Element',Element.defaultProps)
            return <Subscribe to={} >
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