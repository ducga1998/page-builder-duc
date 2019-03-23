
import React, { Component } from 'react';
import './App.css';
import { UITheme } from './Components/UI/UITheme';
import UITooltip from './Components/UI/UITooltip';
import { Provider } from 'unstated-x'
import { ContainerShare } from './Core/Binding';
import Logo from './Workspace/logo';
import Sanbox from './Workspace/Sanbox';
import Navbar from './Workspace/navbar';
import ToastContainer from './Workspace/Toast'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { H2 } from './Components/styled/base';
import Emoji from 'a11y-react-emoji'  
import { AvatarImage } from './Components/styled/avatar';
class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      toast(<><a target="_blank" href="https://github.com/ducga1998/page-builder-duc">
      <AvatarImage data-tooltip="Click me go to redirect link repo  =))) " size={150} src="/default2.png" />
      <H2>
      Helloooooooo my friendddd, star repo for meeee ">"3 </H2>
      </a>
      </>)
    },2000)
  }
  render() {
    return <UITheme>
      <UITooltip>
        <Provider>
          <ContainerShare>

          {/* <Navbar /> */}
            <Sanbox />
            <ToastContainer />
          </ContainerShare>
        </Provider>
      </UITooltip>
    </UITheme>

  }
}

export default App;
