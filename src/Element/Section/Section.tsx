import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import styled from 'styled-components';
import { Subscribe } from 'unstated-x';
// import React from 'react';
import { SketchPicker } from 'react-color';
import { SubscribeStyle } from '../../Container/StyleContainer';
import UIInput from '../../Components/UI/UIInput';
import { ContainerContext } from '../../Core/Binding';
class Section extends React.Component {
    static type = 'Section'
    static get InspectorDuc() {
        return {
            general: <ContainerContext.Consumer>
                {
                    container => {
                        console.log('container', container.state.id)
                        return <div>
                            <Subscribe to={[container]}>
                                {
                                    (con: any) => {

                                        return <>

                                            <SketchPicker
                                                onChangeComplete={(color) => {
                                                    con.setStyle({ background: color.hex })
                                                }} />
                                        </>
                                    }
                                }
                            </Subscribe>
                            <SubscribeStyle to={container} bind={'background'} key={container.state.id}>
                                {
                                    (containerStyle, rule) => {
                                        // console.log("styles.style['background']",valueStyle)
                                        return <UIInput onChange={value => {
                                            container.setStyle({ background: value })
                                        }} value={rule.style['background']} />
                                    }
                                }
                            </SubscribeStyle>
                        </div>
                    }
                }
            </ContainerContext.Consumer>
        }
    }
    render() {
        if (React.Children.count(this.props.children) === 0) {
            return <$Section className="row" center>
                Section
        </$Section>
        }
        console.log('section children', this.props.children)
        return <$Section>
            {this.props.children}
        </$Section>
    }
}
const $Section = styled.div<any>`
    padding : 40px;
    margin : 0px;
    border: 1px dashed #808080;
    ${props => props.center ? `display :flex;justify-content : center;align-items : center;color : #808080` : ''}
`
export default enhanceElement(Section)