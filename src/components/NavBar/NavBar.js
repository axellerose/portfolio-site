import React from 'react';
import styled from 'styled-components';
import Box from '../common/Box';
import Logo from '../Logo';
import { MobileMenu } from './MobileMenu';

const Bar = styled(Box)`

`

const NavBar = () => {
    return (
        <Bar>
            <Logo />
            <MobileMenu />
        </Bar>
    )
}

export default NavBar
