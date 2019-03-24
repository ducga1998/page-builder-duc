import * as React from 'react'
import PageEditer from '../Workspace/pageEditer'
import SideBar from '../Workspace/sidebar';
import Page from '../Element/Page/Page';;
import Inspector from '../Workspace/inspector';
import PathWay from './Footer/pathway';
import Style from '../Element/Style';
import styled from 'styled-components';
import { ModeContext } from '../Container/PageContainer';
import Navbar from './navbar';
class Sanbox extends React.Component<any> {
    state = {
        view: 'edit'
    }
    render() {
        return <WrappeAllApp >
            <ModeContext.Provider value={this.state.view}>
                <Navbar onChange={(view) => { this.setState({ view }) }} active={this.state.view} />

                {this.state.view === 'view' ? <LayoutEditer>
                    <Style>
                        <Page />
                    </Style>
                </LayoutEditer> : <>
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
                    </>}



            </ModeContext.Provider>
        </WrappeAllApp>
    }
}
const WrappeAllApp = styled.div`
    overflow: scroll;
    display :flex;
    flex-direction : column;
    height: 100%;
   
`
const LayoutEditer = styled.div`
display : flex;
height : 100%;
`
export default Sanbox