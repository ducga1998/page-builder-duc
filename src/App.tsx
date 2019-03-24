
import React, { Component } from 'react';
import './App.css';
import { UITheme } from './Components/UI/UITheme';
import UITooltip from './Components/UI/UITooltip';
import { Provider } from 'unstated-x'
import { ContainerShare } from './Core/Binding';
import Sanbox from './Workspace/Sanbox';
import ToastContainer from './Workspace/Toast'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { H2, P } from './Components/styled/base';
import { AvatarImage } from './Components/styled/avatar';
import Navbar from './Workspace/navbar';
import styled from 'styled-components';
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
   setTimeout(() => {
    toast.info(<P>I am usually update project, present project develop, Please wait patiently</P>)
   }, 150000)
  }
  render() {
    return <UITheme>
      <UITooltip>
        <Provider>
          <WrapperFull>
          <ContainerShare>
            <Sanbox />
            <ToastContainer />
          </ContainerShare>
          </WrapperFull>
        </Provider>
      </UITooltip>
    </UITheme>

  }
}
const WrapperFull = styled.div`
   height: 100vh;
`
export default App;
