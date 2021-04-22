import React from 'react';
import styled from 'styled-components';
import Box from '../common/Box';
import Logo from '../Logo';
import { MobileMenu } from './MobileMenu';
import FixedButtons from './FixedButtons';

const Bar = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavBar = () => {
    return (
        <Bar>
            <Logo />
            <FixedButtons />
            <MobileMenu />
        </Bar>
    )
}

export default NavBar
