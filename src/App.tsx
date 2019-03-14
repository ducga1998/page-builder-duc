import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PageEditer from './pageEditer'
import { UITheme } from './Components/UI/UITheme';
import UITooltip from './Components/UI/UITooltip';
import { Provider } from 'unstated-x'
class App extends Component {
  render() {
    return <Provider>
      <UITheme>
        <UITooltip>

          <PageEditer />
        </UITooltip>
      </UITheme>
    </Provider>
  }
}

export default App;
