import React from 'react';
import { between } from 'polished';
import styled from 'styled-components';
import Box from './common/Box';
import Bg from '../assets/developer1.png';
import { up } from '../global/mixins';

const Container = styled(Box)`
    display: flex;
    justify-content: space-around;
`
const StyledImage = styled.img`
    width: 40%;
    position: absolute;
    right: 20px;
    top: 100px;
    ${up.sm`
        width: 200px;
        height: 200px;
        object-fit: cover;
        object-position: top;
        position: relative;
        padding-left: 60px;
    `}
    ${up.md`
        padding-left: 20px;
        width: 250px;
    `}
`

const StyledTitle = styled.h2`
    ${props => props.theme.typography.h2};
    color: #fff;
    text-shadow: 0 1px 2px rgba(58, 60, 77, 1);
    display: flex;
    text-align: left;
    margin-bottom: 0;
    width: 50%;

`
const StyledBar = styled.div`
    height: 5px;
    width: ${between('48px', '60px', '400px', '1000px')};
    background-color: ${props => props.theme.pallete.common.yellow[0]};
    margin-top: 4px;
    box-shadow: 0 5px 4px rgba(0,0,0, 0.25);
    `

const StyledDescription = styled(Box)`
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
        <Container
            flexDirection={['column', 'row', null]}
            px={[5, 10, 40]}
            pb={10}
        >
            <StyledImage src={Bg} />
            <StyledDescription pl={[null, 5, 20]} pr={[null, 12, 0]}>
                <Box className="title">
                    <StyledTitle >Alexander Gerasymenko</StyledTitle>
                    <StyledBar />
                </Box>
                <h4># introduction</h4>
                <h3>Full-Stack Web Developer, <br /> based in Barcelona, Spain</h3>
                <p>A fast-learning and responsible person that is looking for new opportunities and challenges.
                My 4 year experience of working in IT company as International Sales manager & QA
                boosted my communication skills, ability to work under stress conditions and multicultural collaboration.
                    </p>
                <a href="https://drive.google.com/file/d/1HFnFJt_Bnwe1IxatwKriJYufrciOx3DJ/view?usp=sharing" target="_blank" rel="noreferrer">{"check my CV >>"}</a>
            </StyledDescription>

        </Container >
    )
}

export default Header;
