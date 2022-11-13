import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
        list-style: none;
        display: flex;
        flex-flow: row nowrap;

        li {
            /* padding: 18px 10px; */
            padding-right: 25px;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            flex-flow: column nowrap;
            position: fixed;
            transform: ${({ open }) => open ? 'translateX(25%)' : 'translateX(100%)'};
            top: 0;
            right: 0;
            height: 100vh;
            width: 300px;
            padding-top: 3.5rem;
            background-color: #0d2538;
            transition: transform 0.5s ease-in-out;

            li {
                padding: 18px 15px;
                color: white;
            }
        }
`;

export default function Rightbar({ open }) {
    return (
        <Ul open={open}>
            <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>
                <li>NOSOTROS</li>
            </Link>
            <Link to={'/services'} style={{ textDecoration: "none", color: "black" }}>
                <li>SERVICIOS</li>
            </Link>
            <Link to={'/vacancies'} style={{ textDecoration: "none", color: "black" }}>
                <li>BUSQUEDAS</li>
            </Link>
            <Link to={'/contact'} style={{ textDecoration: "none", color: "black" }}>
                <li>CONTACTO</li>
            </Link>
        </Ul>
    )
}
