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
    margin-right: 0.5em;
`

const StyledDescription = styled.div`
    margin-bottom: 40px;
    h3 {
        ${props => props.theme.typography.h3}
    }
    h4 {
        ${props => props.theme.typography.h4}
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
                <StyledTitle >Alexander Gerasymenko</StyledTitle>
            </ContainerWithBg>
            <div>
                <StyledDescription>
                    <h4># introduction</h4>
                    <h3>Full-Stack Web Developer, <br /> based in Barcelona, Spain</h3>
                    <p>A fast-learning and responsible person that is looking for new opportunities and challenges.
                    My 4 year experience of working in IT company as International Sales manager & QA
                    boosted my communication skills, ability to work under stress conditions and multicultural collaboration.
                    </p>
                    <a href="https://drive.google.com/file/d/1HFnFJt_Bnwe1IxatwKriJYufrciOx3DJ/view?usp=sharing" target="_blank" rel="noreferrer">{"check my CV ->"}</a>
                </StyledDescription>
            </div>
        </>
    )
}

export default Header;
