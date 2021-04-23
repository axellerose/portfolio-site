import React from 'react';
import styled from 'styled-components';
import Svg from '../common/Svg';

import { ReactComponent as Arrow } from '../../assets/arrow.svg';

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
    .hide {
        opacity: 0;
        transform: scale(0);
    }
    & path {
        ${({ colorType = "fill" }) => colorType}: currentColor;
    }  
`
const FixedButtons = () => {

    const scrollUp = () => window.scrollTo(0, 0);

    // Hide arrow on scroll down
    const add_class_on_scroll = () => document.getElementById("btn-up").classList.add("hide")
    const remove_class_on_scroll = () => document.getElementById("btn-up").classList.remove("hide")

    window.addEventListener('scroll', () => {
        let body = document.body;
        let html = document.documentElement;
        let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        let scrollPos = window.scrollY;
        scrollPos < height / 1.5 ? add_class_on_scroll() : remove_class_on_scroll();
    })
    return (
        <div onClick={scrollUp} >
            <StyledSvg ><Arrow id="btn-up" className="arrow" /></StyledSvg>
        </div>
    )
}

export default FixedButtons;
