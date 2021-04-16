import React from 'react';
import styled from 'styled-components';
import Box from './common/Box';

const StyledDescription = styled.div`
    margin-left: 20px;
    h5 {
        ${props => props.theme.typography.h5}
        width: 80%;
    }
    h6 {
        ${props => props.theme.typography.h6}
    }
`

const Contacts = () => {
    return (
        <Box>
            <StyledDescription>
                <h6># contact me</h6>
                <h5>Have got a Project? Let's talk!</h5>
            </StyledDescription>
        </Box>
    )
}

export default Contacts;
