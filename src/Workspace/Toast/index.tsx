import * as React from 'react'
import styled from 'styled-components'
import { ToastContainer, Slide, Zoom, Flip, Bounce, toast } from 'react-toastify';
export default () => {
    return <WrapperToast>
        <ToastContainer
            toastClassName="dark-toast"
            transition={Zoom}
            autoClose={10000}
            className='md-toast-container' 
            position =  {toast.POSITION.BOTTOM_RIGHT}
            />
             
    </WrapperToast>
}
    const WrapperToast = styled.div`
    .md-toast-container{
        /* padding : 20px; */
        /* background : ${props => props.theme.bg.default}; */
        /* border-radius : 10px; */
    }
    .dark-toast {
        border-radius : 10px;
    }
`