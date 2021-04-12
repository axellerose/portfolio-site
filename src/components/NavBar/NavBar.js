import React from 'react';
import styled from 'styled-components';
import { flexbox } from 'styled-system';
import { down, up } from '../../mixins';
import theme from '../../theme';
import Box from '../Box/Box';

const Bar = styled(Box)`
    display: flex;
    justify-content: space-between;
`
const Logo = styled.div`
`
const NavList = styled.ul`
`
const NavItem = styled.li`

`

const NavBar = props => {
    return (
        <Bar>
            <Logo>
                Logo
            </Logo>
            <NavList>
                <NavItem>
                    Skills
                </NavItem>
                <NavItem>
                    Projects
                </NavItem>
                <NavItem>
                    Contacts
                </NavItem>
            </NavList>

        </Bar>
    )
}

export default NavBar
