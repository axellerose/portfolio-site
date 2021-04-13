import React, { useState } from 'react';
import styled from 'styled-components';
import { position } from 'styled-system';
import { down, up } from '../../global/mixins';
import { ReactComponent as CloseMenu } from '../../assets/close.svg'
import { ReactComponent as OpenMenu } from '../../assets/menu.svg'
import Svg from '../common/Svg';

const StyledSvg = styled(Svg)`
position: absolute;
    top: 1.2em;
    right: 2em;
    width: 2em;
    & svg { 
    margin-left: auto;
    height: 1.875em;
    color: ${props => props.theme.pallete.text.primary}
  }
`

const Menu = styled.ul`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0;
    padding: 10em 5em;
    background-color: ${props => props.theme.pallete.secondary[1]};
    ${up.sm`
        display: none
    `}
`
const Option = styled.li`
`

export const MobileMenu = ({ theme }) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            {!click &&
                <StyledSvg onClick={handleClick}>
                    <OpenMenu />
                </StyledSvg>
            }

            {click &&
                <Menu>
                    <StyledSvg onClick={handleClick}>
                        <CloseMenu />
                    </StyledSvg>
                    <Option>Skills</Option>
                    <Option>Projects</Option>
                    <Option>Contacts</Option>
                </Menu>

            }
        </>

    )
}
