
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
class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      toast(<><Logo />
      <H2>Helloooooooo my friendddd</H2>
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
