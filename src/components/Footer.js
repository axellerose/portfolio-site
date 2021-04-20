import React from 'react';
import styled from 'styled-components';
import Box from './common/Box';
import { ReactComponent as Telegram } from '../assets/techIcons/telegram.svg';
import { ReactComponent as Skype } from '../assets/techIcons/skype.svg';
import { ReactComponent as Linkedin } from '../assets/techIcons/linkedin.svg';
import Svg from './common/Svg';

const Container = styled(Box)`
    display: flex;
    background-color: ${props => props.theme.pallete.secondary};

    h5, a {
        line-height: 2em;
        color: ${props => props.theme.pallete.common.yellow[0]}
    }
`

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    width: 100%;
`

const ListItem = styled.li`
    margin-right: 12px;
`
const StyledSvg = styled(Svg)`
    & svg {
        height: 1em;
        height: 2em;
    }
    /* & path {
        ${({ colorType = "fill" }) => colorType}: currentColor;
    }  */
`

const Footer = () => {
    return (
        <Container mx={-5} mt={5} px={5}>
            <h5><a href="mailto:iamalex.dev@gmail.com">iamalex.dev@gmail.com</a> </h5>
            <StyledList>
                <ListItem>
                    <a href="tg://resolve?domain=axellerose">
                        <StyledSvg> <Telegram /> </StyledSvg>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="skype:live:.cid.3a9fb59ad25fcf3a?userinfo">
                        <StyledSvg> <Skype /> </StyledSvg>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="https://www.linkedin.com/in/alex-gerasymenko/" target="_blank">
                        <StyledSvg> <Linkedin /> </StyledSvg>
                    </a>
                </ListItem>


            </StyledList>
        </Container>
    )
}

export default Footer
