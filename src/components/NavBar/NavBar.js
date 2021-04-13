import React from 'react';
import styled from 'styled-components';
import { down, up } from '../../global/mixins';
import theme from '../../global/theme';
import Box from '../common/Box';
import Logo from '../Logo/Logo';
import { MobileMenu } from './MobileMenu';

const Bar = styled(Box)`
    display: flex;
    justify-content: space-between;
`

const NavBar = props => {
    return (
        <Bar>
            <Logo />
            <MobileMenu />

        </Bar>
    )
}

export default NavBar
