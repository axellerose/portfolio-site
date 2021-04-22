import React from 'react';
import styled from 'styled-components';
import Svg from '../common/Svg';

import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';
import { down } from '../../global/mixins';

const StyledSvg = styled(Svg)`
    .up {
        position: fixed;
        bottom: 3.9em;
        right: 1.2em;
        z-index: 5;
        transform: rotate(90deg);
        height: 2.5em;
        opacity: 0.6;
    }
    .mail {
        position: fixed;
        top: 30%;
        right: 2em;
        z-index: 5;
        height: 2em;
        ${down.sm`
            display: none;
        `}
    }
    & path {
        ${({ colorType = "fill" }) => colorType}: currentColor;
    }  
`

const FixedButtons = () => {
    return (
        <>
            <a href="#up">
                <StyledSvg ><Arrow className="up" /></StyledSvg>
            </a>
            <a href="#up">
                <StyledSvg ><Mail className="mail" /></StyledSvg>
            </a>
        </>
    )
}

export default FixedButtons;
