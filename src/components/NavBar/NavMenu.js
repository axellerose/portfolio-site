import React from 'react';
import styled from 'styled-components';
import { down } from '../../global/mixins';

const Container = styled.div`
    .menu__container {
        width: 100%;
        flex-grow: 1;
    }
    ${down.sm`
        display: none;
    `}
`

const Menu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    margin: 0 auto;
    
`
const Option = styled.li`
    a {
        text-decoration: none;
        color: inherit;
        margin-right: 16px;
        &:focus {
            outline: none;
        }
    }
    ${props => props.theme.typography.h3}

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
