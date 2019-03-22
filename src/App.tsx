
import React, { Component } from 'react';
import './App.css';
import { UITheme } from './Components/UI/UITheme';
import UITooltip from './Components/UI/UITooltip';
import { Provider } from 'unstated-x'
import { ContainerShare } from './Core/Binding';
import Logo from './Workspace/logo';
import Sanbox from './Workspace/Sanbox';
class App extends Component {
  render() {
    return <UITheme>
      <UITooltip>
        <Provider>
          <ContainerShare>
          {/* <Logo /> */}
            <Sanbox />
          </ContainerShare>
        </Provider>
      </UITooltip>
    </UITheme>

  }
}

export default App;
