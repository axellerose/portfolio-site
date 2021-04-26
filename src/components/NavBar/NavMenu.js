import React from 'react';
import styled from 'styled-components';
import { down } from '../../global/mixins';
import Box from '../common/Box';

const Container = styled(Box)`
    .menu__container {
        width: 100%;
    }
    ${down.sm`
        display: none;
    `}
`

const Menu = styled.ul`
    list-style: none;
    display: flex;
    margin: 0 auto;
`
const Option = styled.li`
    a {
        text-decoration: none;
        color: inherit;
        padding-right: 10px;
        &:focus {
            outline: none;
        }
    }
    ${props => props.theme.typography.h4};
    color: ${props => props.theme.pallete.text.primary};

    &:hover {
        color: ${props => props.theme.pallete.text.active};
    }
`

export const NavMenu = () => {
    return (
        <Container >
            <Menu className="menu__container" >
                <Option><a href="#skills">Skills</a></Option>
                <Option><a href="#projects">Projects</a></Option>
                <Option><a href="#contacts">Contacts</a></Option>
            </Menu>
        </Container>
    )
}
