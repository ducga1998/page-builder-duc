import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import styled from 'styled-components';
import { Subscribe } from 'unstated-x';
// import React from 'react';
import { SketchPicker } from 'react-color';
import { SubscribeStyle } from '../../Container/StyleContainer';
import UIInput from '../../Components/UI/UIInput';
import { ContainerContext } from '../../Core/Binding';
class Li extends React.Component {
    static type = 'Li'
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
       return  <$Li className="nav-item">
           <a className="nav-link" href="#">{this.props.children}</a>
         </$Li>
    }
}
const $Li = styled.div`
`
export default enhanceElement(Li)