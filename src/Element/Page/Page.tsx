import * as React from 'react'
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';
import uuid from 'uuid'
import ElementContainer from '../../Container/ElementContainer';
import renderElement from '../../Core/renderElement';
const idBody  = uuid()
const idSection  = uuid()
const defautData = {
   
    idBody : new ElementContainer({children : [idSection] , id : idBody , type : 'Body'}),
    idSection : new ElementContainer({id  : idSection ,  type : 'Section' }),
   
}
interface IPage {
    
}
export default class Page extends React.Component<IPage> {
    static type = 'Page'
    render() {
        return renderElement(idBody)
    }
}