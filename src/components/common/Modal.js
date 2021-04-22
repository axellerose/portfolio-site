import styled from 'styled-components';
import Box from './Box';
import { useState } from 'react';

const Bg = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.5);
    z-index: 10;
`

const Message = styled(Box)`
    background-color: rgba(255,255,255, 0.7);
    width: 70%;
    height: 25%;
    margin: 0 auto;
    color: ${props => props.theme.pallete.secondary};
    text-align: center;
    border-radius: 10px;
    padding: 12px;

    & p {
        ${props => props.theme.typography.body}
        font-weight: 700;
        padding: 12px;
    }
    & button {
        ${props => props.theme.typography.button}
        font-family: 'Roboto';
        font-weight: 400;
        text-transform: uppercase;
    }
`


const Modal = ({ children }) => {
    return (
        <Bg>
            <Message className="center">
                {children}
            </Message>
        </Bg>
    )
}

export default Modal;