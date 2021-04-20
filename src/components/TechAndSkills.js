import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconCss } from '../assets/techIcons/css.svg';
import { ReactComponent as IconFigma } from '../assets/techIcons/figma.svg';
import { ReactComponent as IconFirebase } from '../assets/techIcons/firebase.svg';
import { ReactComponent as IconGatsby } from '../assets/techIcons/gatsby.svg';
import { ReactComponent as IconGit } from '../assets/techIcons/git.svg';
import { ReactComponent as IconHbs } from '../assets/techIcons/hbs.svg';
import { ReactComponent as IconHtml } from '../assets/techIcons/html.svg';
import { ReactComponent as IconJs } from '../assets/techIcons/js.svg';
import { ReactComponent as IconNode } from '../assets/techIcons/node.svg';
// import { ReactComponent as IconPostman } from '../assets/techIcons/postman.svg';
import { ReactComponent as IconReact } from '../assets/techIcons/react.svg';
import { ReactComponent as IconSass } from '../assets/techIcons/sass.svg';
import { ReactComponent as IconTs } from '../assets/techIcons/ts.svg';
import { ReactComponent as IconMongo } from '../assets/techIcons/mongo.svg';
import { ReactComponent as IconRQuery } from '../assets/techIcons/react-query.svg';
import Svg from './common/Svg';
import Box from './common/Box';

const pictures = [
    <IconHtml />,
    <IconCss />,
    <IconJs />,
    <IconNode />,
    <IconMongo />,
    <IconTs />,
    <IconSass />,
    <IconReact />,
    <IconRQuery />,
    <IconFirebase />,
    <IconGatsby />,
    <IconGit />,
    <IconHbs />,
    <IconFigma />,
]

const Container = styled(Box)`
    background-color: ${props => props.theme.pallete.secondary};
    margin:  0  -${props => props.theme.space[5]};
    padding: ${props => props.theme.space[5]};
`
const StyledDescription = styled.div`  
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

const StyledPicturesBlock = styled.div`
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
const StyledSvg = styled(Svg)`
    margin: 4px;
    & svg {
        height: 4em;
  }
`

const TechAndSkills = () => {
    return (
        <Container id="skills">
            <StyledDescription>
                <h4># technology and skills</h4>
                <h3>Proficiency & Responsibility</h3>
                <p>
                    Starting from zero in late 2019 I’ve
                    learned a stack of technologies and
                    methodologies required to build responsive web apps. Taking responsibility on deadlines, adapting for client’s needs and learning on the go are my key features.

                    I keep exploring new technologies and
                    best practices with a passion to improve
                    existing skills and obtain new ones.

                    </p>
            </StyledDescription>
            <StyledPicturesBlock>

                {pictures.map((picture, index) => (
                    <StyledSvg key={index}>
                        { picture}
                    </StyledSvg>
                ))}

            </StyledPicturesBlock>
        </Container>
    )
}

export default TechAndSkills
