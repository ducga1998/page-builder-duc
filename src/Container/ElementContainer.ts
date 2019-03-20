import BaseContainer, { storeElement } from './BaseContainer';
import {SubscribeOne , Container } from 'unstated-x'
import {camelCase} from 'lodash'
import StyleContainer from './StyleContainer';
class ElementContainer extends BaseContainer {
    instanceStyle  = null
    styles   = null
    constructor(state){
        super(state)
        this.styles = new StyleContainer()
    }   
    _listenersStyle = [] as any[]
    setState(state, callback){
        return super.setState(state,callback)
    }
    static get(id){
        return storeElement.get(id)
    }

    setStyle(state) {
        const styles = this.getStyle
       const arrState =  Object.entries(state)[0]
       styles.style[arrState[0]] = arrState[1]
    }
    
    get getStyle(){
        // console.log('className',this.state.className)
        const {className} = this.state
        const instanceStyle  = document.styleSheets[1]  as any
        const arrInstanceStyle  =  Array.from(instanceStyle.cssRules)
        const rule =arrInstanceStyle.find((rule : any) => rule.selectorText === `.${this.state.className}`  )
    //    console.log('rule',rule , instanceStyle)
        if(!rule){
             instanceStyle.insertRule(`.${className}{}`,arrInstanceStyle.length)
             return instanceStyle.cssRules[arrInstanceStyle.length]
        }
        return rule
    }
    get selector() {
        return this.state.componentStyle.lastClassName
    }
    setStyleString(css){
        const selector = this.selector
        const {sheetStyle} = this.state
        if(!this.checkExiesRule){
            sheetStyle.insertRule(`.${selector}{${css}}`,sheetStyle.length)
        }else{
            const cssRule  =  Array.from(sheetStyle.cssRules).find((item:any) => item.selectorText.includes(this.selector)) as any
            const cssCamelCase = camelCase(css)
            const arr =  css.split(':')
            const methodCss  = camelCase(arr[0])
            console.log('cssCamelCase',css)
                cssRule.style[methodCss] = arr[1]
        }
        // this.saveStyle(selector , css)
    }
    saveStyle(selector , css){
      if( this._listeners.find((item : any) =>  item.css === css).length){
        this._listenersStyle.push({selector  , css})
      }
       
    }
    
    get checkExiesRule(){
        const {sheetStyle} = this.state;
        const check = Array.from(sheetStyle.cssRules).find((item:any) => item.selectorText.includes(this.selector))
        return !!check
    }
    
    pushEventToListense(func){
        this.instanceStyle.push(func)
    }

}
export default ElementContainer