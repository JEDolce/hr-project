import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuOpen, Close } from '@material-ui/icons';
import Rightbar from './Rightbar';

const MenuContainer = styled.div`
    cursor: pointer; 
    z-index: 999;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
`;

const Languages = styled.div`
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
        display: none;
    }

    span {
            cursor: pointer;
            margin-right: 10px;
            font-weight: bold;
        }
`;

export default function Menu() {
    const [open, setOpen] = useState(false);

    const HandleClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <Rightbar open={open} />
            <MenuContainer onClick={HandleClick} >
                {open ?
                    <Close style={{ fontSize: "2rem", color: "white" }} />
                    :
                    <MenuOpen style={{ fontSize: "2rem" }} />
                }
            </MenuContainer>
            <Languages>
                <span>ES</span>
                <span>EN</span>
            </Languages>
        </>

    )
}
