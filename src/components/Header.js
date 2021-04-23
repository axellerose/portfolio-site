import React from 'react';
import styled from 'styled-components';
import Box from './common/Box';
import Bg from '../assets/developer.png';
import { up } from '../global/mixins';

const ContainerWithBg = styled(Box)`
    width: 100%;
    background-image: url(${Bg});
    background-size: 60%;
    background-position: left top;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    

    ${up.sm`
        height: 12rem;
    `}
`
const StyledTitle = styled.h2`
    ${props => props.theme.typography.h2};
    text-shadow: 0 1px 2px rgba(58, 60, 77, 1);
    display: flex;
    text-align: right;
    margin-left: auto;
    margin-bottom: 0;
    width: 50%;
    margin-right: 0.5em;
`

const StyledBar = styled.div`
    height: 5px;
    width: 48px;
    background-color: ${props => props.theme.pallete.common.yellow[0]};
    margin-left: auto;
    margin-right: 0.5em;
    margin-top: 4px;
    box-shadow: 0 5px 4px rgba(0,0,0, 0.25);
    `

const Spacer = styled.div`
    width: 100%;
    height: 10vh;

`

const StyledDescription = styled.div`
    margin: 60px 0;
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
            <ContainerWithBg flexDirection={['column', 'row', null]}>
                <StyledTitle >Alexander Gerasymenko</StyledTitle>
                <StyledBar />
                <Spacer />
                <div>
                    <StyledDescription>
                        <h4># introduction</h4>
                        <h3>Full-Stack Web Developer, <br /> based in Barcelona, Spain</h3>
                        <p>A fast-learning and responsible person that is looking for new opportunities and challenges.
                        My 4 year experience of working in IT company as International Sales manager & QA
                        boosted my communication skills, ability to work under stress conditions and multicultural collaboration.
                    </p>
                        <a href="https://drive.google.com/file/d/1HFnFJt_Bnwe1IxatwKriJYufrciOx3DJ/view?usp=sharing" target="_blank" rel="noreferrer">{"check my CV >>"}</a>
                    </StyledDescription>
                </div>
            </ContainerWithBg>
        </>
    )
}

export default Header;
