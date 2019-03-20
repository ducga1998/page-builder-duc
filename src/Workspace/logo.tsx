import * as React from 'react'
import styled from 'styled-components';
import { SubscribeOne } from 'unstated-x';
import workspaceContainer from '../Container/WorkspaceContainer';
import { storeElement } from '../Container/BaseContainer';
import { Nav } from '../Components/styled/nav';
import { AvatarImage } from '../Components/styled/avatar';
import Section from '../Element/Section/Section';

class Logo extends React.Component<any> {
    state = {
        target : null
    }
    selRef :HTMLElement
    render() {
        return <WrapperLogo>

            <AvatarImage data-tooltip="HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO" size={150}src="/default2.png" />
        </WrapperLogo>
    }
}
const WrapperLogo = styled.div`
    display : flex;
    align-items: center;
    justify-content : center;
`
export default Logo