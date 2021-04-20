import React from 'react';
import styled from 'styled-components';
import Box from './common/Box';
import Avatar from '../assets/avatar.png';

const Container = styled(Box)`
    a {
        ${props => props.theme.typography.link}
    }
    .text__mailme {
        line-height: 1.3em;
        text-align: center;
    }
`

const StyledDescription = styled.div`
    margin-left: 20px;
    h3 {
        ${props => props.theme.typography.h3}
        width: 80%;
    }
    h4 {
        ${props => props.theme.typography.h4}
    }
`

const StyledImage = styled(Box)`
    background-image: url(${Avatar});
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 120px;
    height: 120px;

`

const StyledForm = styled.form`
    margin-top: 40px;
    padding-bottom: 20px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: rgba(255,255,255, 0.15);
    border-radius: 10px;

    .form__control {
        width: 75%;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

    input, textarea {
        ${props => props.theme.typography.input}
        &::placeholder {
            font-size: 0.8em;
        }
    };
    
    label {
        ${props => props.theme.typography.label};
    }
    button {
        ${props => props.theme.typography.button};
        margin-top: 20px;
    }
`

const Contacts = () => {
    return (
        <Container display="flex" flexDirection="column">
            <StyledDescription>
                <h4># contact me</h4>
                <h3>Have got a Project? Let's talk!</h3>
            </StyledDescription>
            <Box display="flex" justifyContent="space-around" >
                <StyledImage />
                <Box className="text__mailme">
                    <p>
                        <a href="mailto:iamalex.dev@gmail.com?subject=Message from Contact form">
                            Mail me directly
                        </a> <br />or<br /> use the contact form
                </p>
                </Box>
            </Box>

            <StyledForm id="contacts">
                <h3 >Send me a message</h3>
                <Box className="form__control" >
                    <label htmlFor="">Name :</label>
                    <input type="text" placeholder="Richard Hendricks" />
                </Box>
                <Box className="form__control">
                    <label htmlFor="">Email :</label>
                    <input type="email" placeholder="richard@piedpiper.com" />
                </Box>
                <Box className="form__control">
                    <label htmlFor="">Message :</label>
                    <textarea type="text" rows="3" placeholder="Hi there! I've got a job for you!" />
                </Box>
                <button>Send</button>
            </StyledForm>
        </Container>
    )
}

export default Contacts;
