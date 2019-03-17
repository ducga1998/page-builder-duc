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
// import ElementContainer from 'e'
class App extends Component {
  render() {
    return <UITheme>
      <UITooltip>
        <Provider>
          <LayoutEditer>
            <SideBar />
            <PageEditer >
              <Page />
            </PageEditer>
            <Inspector />
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
