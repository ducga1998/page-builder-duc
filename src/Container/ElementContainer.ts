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
    //    console.log(arrState)
       styles.style[arrState[0]] = arrState[1]
       this._listenersStyle.map(item =>item())
    }
    addItem(){}
    get getStyle(){
        // console.log('className',this.state.className)
        const {className} = this.state
        const instanceStyle  = document.styleSheets[2]  as any
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
            cssRule.style[methodCss] = arr[1]
        }
        // this.saveStyle(selector , css)
    }
    subscribeStyle(func) {
        this._listenersStyle.push(func)
    }
    unSubscribeStyle(func) {
        this._listenersStyle = this._listenersStyle.filter(f => f!==func)
    }
    saveStyle(selector , css){
    }
    getTemplateData(){
        const arrContainer = []
        const dataConvert = []
        storeElement.forEach(item =>  arrContainer.push(item) )
        // storeElemen
        const arrStateElement = arrContainer.filter(con => con.state.type).map(item => item.state)
        const body  = arrStateElement.find(item  => item.type  === 'Body')
        const getDataTemplate = (bodyKey , count) => {
            const parentData =  arrStateElement.find(item => item.id === bodyKey) as any
            if(parentData.children && parentData.children.length > 0){
                parentData.id = count
                // let currentcount = count
               const childrendat =  parentData.children.map(item => {
                    const childrenData =  getDataTemplate(item , count + 1)  
                    // console.log('childrenData',childrenData)
                    parentData.children = []
                    parentData.children.push(++count)
                    // childrenData.id
                    
                })
              
            }
            console.log('parentData',parentData , count)
            return parentData
        }
       const dataOLD =  getDataTemplate(body.id , 0 )
        // console.log('dataOLD',dataOLD)
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
window['ElementContainer'] = ElementContainer