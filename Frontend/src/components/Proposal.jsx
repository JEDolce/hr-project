import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`;

const ProposalTitle = styled.div`
    height: 6rem;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProposalContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
    flex-wrap: wrap;
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
`;

const Item = styled.div`
    height: 20rem;
    width: 16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid lightgray;
    margin: 25px;
    border-radius: 10px;
    box-shadow: -1px 4px 39px -19px rgba(0, 0, 0, 0.67);
    -webkit-box-shadow: -1px 4px 39px -19px rgba(0, 0, 0, 0.67);
    -moz-box-shadow: -1px 4px 39px -19px rgba(0, 0, 0, 0.67);
    -webkit-transition: all 0.75s ease-out;
    -moz-transition: all 0.75s ease-out;
    -o-transition: all 0.75s ease-out;
    -ms-transition: all 0.75s ease-out;
    transition: all 0.75s ease-out;  
    

    :hover {
    background-color: #3e2b55;
    -webkit-transition: all 0.75s ease-in;
    -moz-transition: all 0.75s ease-in;
    -o-transition: all 0.75s ease-in;
    -ms-transition: all 0.75s ease-in;
    transition: all 0.75s ease-in;   

        h3 {
            display: none;
        }

        span {
            display: block;
            color: white;
            text-align: center;
            padding: 0 16px;
        }
    }

    h3 {
        text-align: center;
    }

    span {
    display: none;
} 
`;


export default function Proposal() {

    return (
        <Container>
            <ProposalTitle>
                <h1>Nuestra Propuesta</h1>
            </ProposalTitle>
            <ProposalContent>
                <Item>
                    <h3>Propuesta</h3>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                        magnam corrupti nostrum fugit accusamus soluta molestias fuga
                        +nam impedit nulla aut itaque sapiente amet similique dicta
                        optio tenetur ut. Mollitia.
                    </span>
                </Item>
                <Item>
                    <h3>Servicios Integrales HR</h3>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                        magnam corrupti nostrum fugit accusamus soluta molestias fuga
                        nam impedit nulla aut itaque sapiente amet similique dicta
                        optio tenetur ut. Mollitia.
                    </span>
                </Item>
                <Item>
                    <h3>People Analytics</h3>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                        magnam corrupti nostrum fugit accusamus soluta molestias fuga
                        nam impedit nulla aut itaque sapiente amet similique dicta optio
                        tenetur ut. Mollitia.
                    </span>
                </Item>
                <Item>
                    <h3>Perfiles Tecnicos, IT y Gerenciales</h3>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                        magnam corrupti nostrum fugit accusamus soluta molestias fuga
                        nam impedit nulla aut itaque sapiente amet similique dicta optio
                        tenetur ut. Mollitia.
                    </span>
                </Item>
            </ProposalContent>
        </Container>
    )
}
