import React from 'react';
import styled from 'styled-components';
import Svg from '../common/Svg';

import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';
import { down } from '../../global/mixins';

const StyledSvg = styled(Svg)`
    .arrow {
        position: fixed;
        bottom: 3.9em;
        right: 1.2em;
        z-index: 5;
        transform: rotate(90deg);
        height: 2.5em;
        opacity: 0.6;
    }
    .down {
        top: 3.9em;
        transform: rotate(-90deg);
        ${down.sm`
            display: none;
        `}

    }
    & path {
        ${({ colorType = "fill" }) => colorType}: currentColor;
    }  
`

const scrollUp = () => {
    window.scrollTo(0, 0)
    console.log("up!")
}

const scrollDown = () => {
    window.scrollTo(0, 2000)
    console.log("up!")
}

const FixedButtons = () => {
    return (
        <>
            <div onClick={scrollUp}>
                <StyledSvg ><Arrow className="arrow" /></StyledSvg>
            </div>
            <div onClick={scrollDown}>
                <StyledSvg ><Arrow className="arrow down" /></StyledSvg>
            </div>
        </>
    )
}

export default FixedButtons;
