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
        console.log('section children', this.props.children)
        return <$Section>
            {this.props.children}
        </$Section>
    }
}
const $Section = styled.div`
    padding : 40px;
    background : #eaeaea;
    border: 1px dashed ${props => props.theme.bg.default}
`
export default enhanceElement(Section)