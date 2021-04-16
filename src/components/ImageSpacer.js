import React from 'react';
import styled from 'styled-components';
import bg from '../assets/bg-html.jpeg'

const Spacer = styled.div`
    background: url(${bg}) center top;
    background-size: cover;
    background-repeat: no-repeat;
    height: 9em;
    margin: 0 -20px;
    opacity: 0.5;
    z-index: 1;
`

const ImageSpacer = () => {
    return (
        <Spacer />
    )
}

export default ImageSpacer
