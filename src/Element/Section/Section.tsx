import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import styled from 'styled-components';
import { Subscribe } from 'unstated-x';
// import React from 'react';
import { SketchPicker } from 'react-color';

class Component extends React.Component {

  render() {
    return <SketchPicker />;
  }
}
// import { Button } from 'react-native';
class Section extends React.Component {
    static type = 'Section'
    static InspectorDuc(container){
        return {
            general : <div>
                <Subscribe to={[container]}>
                    {
                        () => {
                    
                            return <> <input type="text" value={container.getStyle['background-color']} onChange={
                                (event : any) =>{
                                    container.setStyleString(event.target.value)
                                }
                            } />
                            <SketchPicker 
                                     onChangeComplete={ (color) => {
                                        container.setStyle({background : color.hex})
                                     } } />
                            </>
                        }
                    }
                </Subscribe>
            </div>
        } 
    }
    render() {
        console.log('section children',this.props.children)
        return <$Section>
            {this.props.children} 
        </$Section>
    }
}
const $Section = styled.div`
    padding : 40px;
    background : gray;
    border: 1px dashed ${props => props.theme.bg.default    }
`
export default enhanceElement(Section)