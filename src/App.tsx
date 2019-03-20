import BaseContainer from './Container/BaseContainer';
import React, { Component } from 'react';
import './App.css';
import PageEditer from './pageEditer'
import { UITheme } from './Components/UI/UITheme';
import UITooltip from './Components/UI/UITooltip';
import { Provider } from 'unstated-x'
import SideBar from './Workspace/sidebar';
import Page from './Element/Page/Page';;

import Inspector from './Workspace/inspector';
import styled from 'styled-components';
import Style from './Element/Style';

class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return <UITheme>
      <UITooltip>
        <Provider>
          <LayoutEditer>
            <Style>

           
            <SideBar />
            <PageEditer >
              <Page />
            </PageEditer>
            <Inspector />
            </Style>
          </LayoutEditer>
        </Provider>
      </UITooltip>
    </UITheme>

  }
}
const LayoutEditer = styled.div`
display : flex;
`
export default App;
