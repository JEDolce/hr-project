import {
    CopyrightOutlined,
    Facebook,
    HomeWorkOutlined,
    Instagram,
    LinkedIn,
    MailOutline,
    PhoneInTalkRounded
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 15rem;
    background-color: lightgray;
    display: flex;
`;

const LogoContainer = styled.div`
    flex: 1.5;
    margin-top: 60px;
    margin-left: 30px;

    .separador {
        height: 2px;
        width: 40px;
        background-color: #333;
    }

    p {
        margin-top: 10px;
    }  
`;

const ContactInfo = styled.div`
    flex: 3;
    display:flex;
    align-items: center;
    justify-content: space-around;

    p {
        margin-top: 10px;
    }
`;

const Item = styled.div`
    flex: 1;
    margin: 10px 10px;
`;

const Links = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
            list-style: none;
            cursor: pointer;
        }

        li:nth-child(2) {
            padding-top: 20px;
        }

        li:nth-child(3) {
            padding-top: 20px;
        }

        li:nth-child(4) {
            padding-top: 20px;
        }
    }
`;

const SocialMedia = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul {

        li {
            list-style: none;
            cursor: pointer;
        }

        li:nth-child(2) {
            padding-top: 20px;
        }

        li:nth-child(3) {
            padding-top: 20px;
        }
    }
`;

const Copyright = styled.div`
    background-color: #323232;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 12px;
        color: #d9dbdd;
        padding: 10px;
    }
`;

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div>
            <Container>
                <LogoContainer>
                    <h1>KIKE.</h1>
                    <div className='separador'></div>
                    <p>Humanos sin recursos</p>
                </LogoContainer>
                <ContactInfo>
                    <Item>
                        <HomeWorkOutlined style={{ fontSize: "40px" }} />
                        <p>Oficina Central</p>
                        <p>Belgrano 433, Belen de Escobar</p>
                    </Item>
                    <Item>
                        <PhoneInTalkRounded style={{ fontSize: "40px", marginBottom: "10px" }} />
                        <p>+54 9 11 1111 2222</p>
                        <p>+54 9 348 453 2637</p>
                    </Item>
                    <Item>
                        <MailOutline style={{ fontSize: "40px", marginBottom: "10px" }} />
                        <p>info@kymconsultora.com</p>
                        <p>busquedas@kymconsultora.com</p>
                    </Item>
                </ContactInfo>
                <Links>
                    <ul>
                        <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>
                            <li>NOSOTROS</li>
                        </Link>
                        <Link to={'/services'} style={{ textDecoration: "none", color: "black", marginTop: "20px" }}>
                            <li>SERVICIOS</li>
                        </Link>
                        <Link to={'/vacancies'} style={{ textDecoration: "none", color: "black", marginTop: "20px" }}>
                            <li>BUSQUEDAS</li>
                        </Link>
                        <Link to={'/contact'} style={{ textDecoration: "none", color: "black", marginTop: "20px" }}>
                            <li>CONTACTO</li>
                        </Link>
                    </ul>
                </Links>
                <SocialMedia>
                    <ul>
                        <li><LinkedIn style={{ fontSize: "30px" }} /></li>
                        <li><Facebook style={{ fontSize: "30px" }} /></li>
                        <li><Instagram style={{ fontSize: "30px" }} /></li>
                    </ul>
                </SocialMedia>
            </Container>
            <Copyright>
                <p>KYM Consultora || Todos los derechos reservados Copyright <CopyrightOutlined style={{ fontSize: "12px" }} /> {year}</p>
            </Copyright>
        </div>
    )
}
