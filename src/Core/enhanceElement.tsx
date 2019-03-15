export default function enhanceElement(Element){
    return class extends Element{
    
        render(){
            return <Element test="duc" />
        }
    }
}