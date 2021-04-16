import React, { useState } from 'react';
import styled from 'styled-components';
import { up } from '../../global/mixins';
import { ReactComponent as OpenMenu } from '../../assets/menu.svg';
import Svg from '../common/Svg';

const Container = styled.div`
    input[type='checkbox'] {
        transform: scale(0);
        width: 2.7em;
        height: 2.7em;
        position: fixed;
        top: 1em;
        right: 1.6em;
        z-index: 4;
    }

    input[type="checkbox"]:checked + .menu__container {
       transform: translateX(0);
    }

    label {
        position: relative;
        z-index: 6;
    }

    .menu__container {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0;
        padding: 0;
        background-color: ${props => props.theme.pallete.secondary};
        transform: translateY(-100%);
        transition: transform .35s ease;
        z-index: 4;
    }

    ${up.sm`
            display: none
        `}
`

const StyledSvg = styled(Svg)`
    position: fixed;
    top: 1.45em;
    right: 2.2em;
    width: 2em;
    & svg { 
        margin-left: auto;
        height: 1.875em;
        color: ${props => props.theme.pallete.common.white};
    }
    & path {
    ${({ colorType = "fill" }) => colorType}: currentColor;
  } 
`
const Menu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`
const Option = styled.li`
    a {
        text-decoration: none;
        color: inherit;
        margin: 0 auto;
        &:focus {
            outline: none;
        }
    }
    text-align: center;
    ${props => props.theme.typography.h2}
    margin-bottom: 1em;

    &:hover, :active {
        color: ${props => props.theme.pallete.text.active};
    }
`

export const MobileMenu = () => {
    const handleClick = () => {
        let checkbox = document.getElementById("cb")
        return checkbox.checked = false
    }

    return (
        <Container >
            <label htmlFor="cb">
                <StyledSvg>
                    <OpenMenu />
                </StyledSvg>
            </label>
            <input id="cb" type="checkbox" />
            <Menu className="menu__container" >
                <input id="cb" type="checkbox" />
                <Option onClick={handleClick}><a href="#skills">Skills</a></Option>
                <Option onClick={handleClick}><a href="#projects">Projects</a></Option>
                <Option onClick={handleClick}><a href="#contacts">Contacts</a></Option>
            </Menu>
        </Container>
    )
}
