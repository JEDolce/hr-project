import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const Nav = styled.div`
    width: 100%;
    height: 70px;
    background-color: lightgray;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 768px) {
        justify-content: space-between;
    }

    .logo {
        font-weight: bold;
        padding: 15px 0;
        cursor: pointer;
    }
`;

export default function Navbar() {

    return (
        <Nav>
            <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>
                <div className='logo'>
                    <h1>KIKE.</h1>
                </div>
            </Link>
            <Menu />
        </Nav>
    )
}