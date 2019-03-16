import React, { Component } from 'react';
import './App.css';
import PageEditer from './pageEditer'
import { UITheme } from './Components/UI/UITheme';
import UITooltip from './Components/UI/UITooltip';
import { Provider } from 'unstated-x'
import InspectorPage from './Workspace/sidebar';
import Page from './Element/Page/Page';
import uuid from 'uuid'
import ElementContainer from './Container/ElementContainer';
// import ElementContainer from 'e'
class App extends Component {
  render() {
    return <UITheme>
          <UITooltip>
          <Provider>
            <InspectorPage />
            <PageEditer >
              <Page />
            </PageEditer>
            </Provider>
          </UITooltip>
        </UITheme>
   
  }
}

export default App;
