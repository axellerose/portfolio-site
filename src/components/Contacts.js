import React, { useState } from 'react';
import styled from 'styled-components';
import Box from './common/Box';
import Avatar from '../assets/avatar.png';
import emailjs from 'emailjs-com';

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

    const [template, setTemplate] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
    });

    const sendEmail = e => {
        const SERVICE_ID = "service_mbnbpk5";
        const TEMPLATE_ID = "template_f0p5w5h";
        const USER_ID = "user_jZrXi2I6JqNGUNyQZzy8N"

        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                alert("Thanks for reaching me out ! I will contact you back soon, cheers!");
                clearForm();
            }, (error) => {
                console.log(error.text);
            });
    }

    const changeHandler = e => {
        setTemplate({ ...template, [e.target.name]: e.target.value })
    }

    const clearForm = () => {
        setTemplate({
            user_name: '',
            user_email: '',
            subject: '',
            message: '',
        })
    }

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

            <StyledForm id="contacts" className="contact-form" onSubmit={sendEmail}>
                <h3 >Send me a message</h3>
                <Box className="form__control" >
                    <label htmlFor="">Name :</label>
                    <input
                        type="text"
                        name="user_name"
                        value={template.user_name}
                        placeholder="Richard Hendricks"
                        onChange={changeHandler}
                        required
                    />
                </Box>
                <Box className="form__control">
                    <label htmlFor="">Email :</label>
                    <input
                        type="email"
                        name="user_email"
                        value={template.user_email}
                        placeholder="richard@piedpiper.com"
                        onChange={changeHandler}
                        required
                    />
                </Box>
                <Box className="form__control">
                    <label htmlFor="">Subject :</label>
                    <input
                        type="text"
                        name="subject"
                        value={template.subject}
                        placeholder="optional"
                        onChange={changeHandler}
                    />
                </Box>
                <Box className="form__control">
                    <label htmlFor="message">Message :</label>
                    <textarea
                        required
                        name="message"
                        value={template.message}
                        type="text"
                        rows="3"
                        placeholder="Hi there! I've got a job for you!"
                        onChange={changeHandler}
                    />
                </Box>
                <button>Send</button>
            </StyledForm>
        </Container>
    )
}

export default Contacts;
