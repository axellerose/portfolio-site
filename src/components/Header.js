import React from 'react';
import styled from 'styled-components';
import Box from './common/Box';
import Bg from '../assets/developer-bg.png';

const ContainerWithBg = styled(Box)`
    width: 100%;
    background-image: url(${Bg});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 12rem;
`
const StyledTitle = styled.h2`
    ${props => props.theme.typography.h2};
    text-shadow: 0 1px 2px rgba(58, 60, 77, 1);
    display: flex;
    text-align: right;
    margin-left: auto;
    width: 50%;
`

const StyledDescription = styled.div`
    margin-bottom: 40px;
    h5 {
        ${props => props.theme.typography.h5}
    }
    h6 {
        ${props => props.theme.typography.h6}
    }
    p {
        ${props => props.theme.typography.body}
    }
    a {
        ${props => props.theme.typography.link}
    }
`

const Header = () => {
    return (
        <>
            <ContainerWithBg>
                <StyledTitle>Alexander Gerasymenko</StyledTitle>
            </ContainerWithBg>
            <div>
                <StyledDescription>
                    <h6># introduction</h6>
                    <h5>Full-Stack Web Developer, <br /> based in Barcelona, Spain</h5>
                    <p>I’m a fast-learning and responsible person that is looking for new opportunities and challenges.</p>
                    <a href="#cv">{"check my CV ->"}</a>
                </StyledDescription>
            </div>
        </>
    )
}

export default Header;