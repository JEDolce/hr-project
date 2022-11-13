import React, { useState } from 'react';
import styled from 'styled-components';
import { inputsData } from '../data';

const Container = styled.div`
    height: 75vh;
    width: 100vw;
    margin: 2rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FormContainer = styled.div`
    height: 40rem;
    width: 70vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`;

const Left = styled.div`
    display: flex;
    justify-content: center;

    form {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            text-align: center;
        }

        button {
            width: 100%;
            padding: 10px;
            height: 50px;
            border: none;
            background-color: #8b356c;
            color: white;
            border-radius: 5px;
            font-weight: 600;
            font-size: 18px;
            cursor: pointer;
            margin-top: 15px;
            margin-bottom: 30px;
            letter-spacing: 1px;
        }
    }
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;

    label {
        font-size: 12px;
        color: gray;
    }

    input {
        height: 32px;
        margin-top: 5px;
        padding: 15px;
        border: 1px solid gray;
        border-radius: 5px;
    }
`;

const Message = styled.div`
    margin-top: 20px;

    textarea {
        width: 100%;
        margin-top: 5px;
    }
`;

const Right = styled.div`   
    iframe {
        width: 100%;
    }   
`;


export default function Form() {
    const [mailer, setMailer] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setMailer({ ...mailer, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ mailer });
        // 1) Enviamos la consulta
        await fetch('http://localhost:4000/sendmail', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ mailer })
        })
            // 2) Pasamos la respuesta a json
            .then((res) => res.json())
            // 3) mostramos la respuesta en la consola
            .then(async (res) => {
                const resData = await res;
                console.log(resData);
                // 4) Dependiendo de la respuesta enviamos un alerta con un mensaje
                resData.status === "SUCCESS"
                    ? alert("Message Sent!")
                    : alert("Message failed to send")
            })
            // 5) Limpiamos el formulario de contacto
            .then(() => {
                setMailer({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            });
    };

    return (
        <div>
            <Container>
                <FormContainer>
                    <Left>
                        <form onSubmit={handleSubmit}>
                            <h1>Contactate con Nosotros</h1>
                            {inputsData.map(item =>
                                <Input key={item.id}>
                                    <label>{item.label}</label>
                                    <input
                                        type={item.type}
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        value={mailer[item.name]}
                                        onChange={handleChange}
                                    />
                                </Input>
                            )}
                            <Message>
                                <label>Mensaje:</label>
                                <textarea
                                    name="message"
                                    cols="30"
                                    rows="5"
                                    value={mailer.message}
                                    onChange={handleChange}
                                />
                            </Message>
                            <button type='submit'>Enviar</button>
                        </form>
                    </Left>
                    <Right>
                        <iframe
                            title='location'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6587.911197187833!2d-58.79213793970338!3d-34.351608109381246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb61b90c949f8d%3A0x957ce105f51ea2dd!2sJard%C3%ADn%20Japon%C3%A9s%20de%20Escobar!5e0!3m2!1ses-419!2sar!4v1656957058607!5m2!1ses-419!2sar"
                            width="600"
                            height="100%"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </Right>
                </FormContainer>
            </Container>
        </div>
    )
}
