import React, { Component } from 'react';
import './App.css';
import PageEditer from './pageEditer'
import { UITheme } from './Components/UI/UITheme';
import UITooltip from './Components/UI/UITooltip';
import { Provider } from 'unstated-x'
import InspectorPage from './Workspace/sidebar';
class App extends Component {
  render() {
    return <UITheme>
          <UITooltip>
          <Provider>
            <InspectorPage />
            <PageEditer />
            </Provider>
          </UITooltip>
        </UITheme>
   
  }
}

export default App;
