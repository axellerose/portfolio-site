import React from 'react';
import styled from 'styled-components';
import Box from '../common/Box';
import Logo from '../Logo';
import { MobileMenu } from './MobileMenu';
import FixedButtons from './FixedButtons';
import { NavMenu } from './NavMenu';

const Bar = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const NavBar = () => {
    return (
        <Bar px={[5, 20, 40]}>
            <Logo />
            <FixedButtons />
            <NavMenu />
            <MobileMenu />
        </Bar>
    )
}

export default NavBar
