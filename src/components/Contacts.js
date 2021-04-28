import React, { useState } from 'react';
import styled from 'styled-components';
import Box from './common/Box';
import Avatar from '../assets/avatar.png';
import emailjs from 'emailjs-com';
import Loader from './Loader';
import Modal from './common/Modal';
import { up } from '../global/mixins';

const SERVICE_ID = "service_mbnbpk5";
const TEMPLATE_ID = "template_f0p5w5h";
const USER_ID = "user_jZrXi2I6JqNGUNyQZzy8N";

const Container = styled(Box)`
    a {
        ${props => props.theme.typography.link}
    }
    .text__mailme {
        ${props => props.theme.typography.body}
        line-height: 1.3em;
        text-align: center;
    }
`

const StyledDescription = styled.div`
    margin-left: 20px;
    h3 {
        ${props => props.theme.typography.h3}
        width: 80%;
        ${up.sm`
        width: 100%;
    `}
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

    ${up.sm`
        width: 160px;
        height: 160px;
        margin: 0 auto;
    `}
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
    ${up.sm`
        width: 50%;
    `}
    ${up.md`
        width: 40%;
    `}

    h3 {
        ${props => props.theme.typography.h3}
    }

    .form__control {
        width: 75%;
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

    input, textarea {
        ${props => props.theme.typography.input}
        width: 65%;
        &::placeholder {
            font-size: 0.8em;
        }
    };
    
    label {
        ${props => props.theme.typography.label};
        width: 35%;
        white-space: nowrap;
    }
    button {
        ${props => props.theme.typography.button};
        margin-top: 20px;
    }
`

const StyledModal = styled(Modal)``

const Contacts = () => {
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false)

    const [template, setTemplate] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
    });

    const modalHandler = () => {
        setModal(!modal)
    }

    const sendEmail = e => {
        setLoading(true);
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then(() => {

                // alert("Thanks for reaching me out ! I will contact you back soon, cheers!");
                modalHandler()
            }, (error) => {
                console.log(error.text);
            }).finally(() => { setTimeout(clearForm(), setLoading(false), 2000) })

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
        <Container
            display="flex"
            flexDirection={["column", "row"]}
            px={[5, 20, 40]}
            py={[5, 10, 10]}
        >
            {loading && <Loader />}
            {modal &&
                <StyledModal>
                    <h2>Message sent</h2>
                    <p>Thanks for reaching me out! I will contact you back soon, have a nice day!</p>
                    <button type="button" onClick={modalHandler}>OK</button>
                </StyledModal>
            }
            <Box display="flex" flexDirection="column" mr="auto">
                <StyledDescription>
                    <h4># contact me</h4>
                    <h3>Have a Project? Let's talk!</h3>
                </StyledDescription>
                <Box
                    display="flex"
                    justifyContent={["space-evenly"]}
                    flexDirection={['row', 'column', 'column']}
                >
                    <StyledImage />
                    <Box className="text__mailme">
                        <p>
                            <a href="mailto:iamalex.dev@gmail.com?subject=Message from Contact form">
                                Mail me directly
                        </a> <br />or<br /> use the contact form
                </p>
                    </Box>
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
