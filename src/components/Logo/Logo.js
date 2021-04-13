import React from 'react'
import styled from 'styled-components'

const Logotype = styled.h1`
    ${props => props.theme.typography.h1}
    color: ${props => props.theme.pallete.common.yellow[1]};
    font-weight: 700;
    letter-spacing: 0.1em;
    text-shadow: 1px 2px 2px rgba(255,255,255, 0.4);
`
const Logo = () => {
    return (
        <Logotype>{`<IamAlex />`}</Logotype>
    )
}

export default Logo
