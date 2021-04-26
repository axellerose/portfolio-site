import React from 'react';
import styled from 'styled-components';
import Box from './common/Box';
import { ReactComponent as Telegram } from '../assets/techIcons/telegram.svg';
import { ReactComponent as Skype } from '../assets/techIcons/skype.svg';
import { ReactComponent as Linkedin } from '../assets/techIcons/linkedin.svg';
import { ReactComponent as Git } from '../assets/techIcons/git.svg';
import Svg from './common/Svg';
import { up } from '../global/mixins';

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${props => props.theme.pallete.secondary};

    h5, a {
        ${props => props.theme.typography.link}
        line-height: 2em;
        color: ${props => props.theme.pallete.common.yellow[0]};

    }
`

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    ${up.sm`
    width: auto`}
`

const ListItem = styled.li`
   margin-right: 12px;
`
const StyledSvg = styled(Svg)`
    & svg {
        height: 32px;
        height: 32px;
    }
    /* & path {
        ${({ colorType = "fill" }) => colorType}: currentColor;
    }  */
`

const Footer = () => {
    return (
        <Container mx={[-5, null, null]} mt={5} px={5}>
            <Box my="auto"><a href="mailto:iAmAlex.dev@gmail.com">iAmAlex.dev@gmail.com</a> </Box>
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
                    <a href="https://www.linkedin.com/in/alex-gerasymenko/" target="_blank" rel="noreferrer">
                        <StyledSvg> <Linkedin /> </StyledSvg>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="https://github.com/axellerose" target="_blank" rel="noreferrer">
                        <StyledSvg> <Git /> </StyledSvg>
                    </a>
                </ListItem>
            </StyledList>
        </Container>
    )
}

export default Footer
