import * as React from 'react'
// import BaseContainer from '.../Container/BaseContainer';
import PageEditer from '../Workspace/pageEditer'
import SideBar from '../Workspace/sidebar';
import Page from '../Element/Page/Page';;

import Inspector from '../Workspace/inspector';
import PathWay from './Footer/pathway';
import Style from '../Element/Style';
import styled from 'styled-components';
class Sanbox extends React.Component<any> {
    wrapperRef : HTMLElement
    componentDidMount(){
        this.wrapperRef.style.height = window.innerHeight + 'px'
        window.addEventListener('resize' , () => {
            console.log('')
            this.wrapperRef.style.height = window.innerHeight + 'px'
        })
    }
    render() {
        return <WrappeAllApp ref={ e => this.wrapperRef =  e}>
              
                <LayoutEditer>
                    <Style>
                    <SideBar />
                    <PageEditer >
                    <Page />
                    </PageEditer>
                    <Inspector />
                    </Style>
                </LayoutEditer>
                <PathWay />
               
        </WrappeAllApp>
    }
}
const WrappeAllApp = styled.div`
    overflow: scroll;
    display :flex;
    flex-direction : column;
`
const LayoutEditer = styled.div`
display : flex;
height : 100%;
`
export default Sanbox