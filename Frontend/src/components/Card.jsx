import React from 'react';
import styled from 'styled-components';

const JobCard = styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    min-height: 40rem;  
    width: 22vw;    /**/ 
    margin: 2rem 1.5rem; /**/

    img {
        width: 100%;
        height: 15rem;  
    }

    p {
        margin-top: 20px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;

    button {
            width: 50%;
            padding: 10px;
            height: 50px;
            border: 2px solid #8b356c ;
            border-radius: 5px;
            font-weight: 600;
            font-size: 18px;
            cursor: pointer;
            margin-top: 2rem;
            margin-bottom: 30px;
            letter-spacing: 1px;
    }
`;

const Info = styled.div`
    margin: 1rem;
`;

export default function Card({ job }) {
    const { img, title, yearsExp, desc } = job;

    return (
        <div>
            <JobCard >
                <img src={img} alt="" />
                <Info>
                    <h2>{title}</h2>
                    <p>Experiencia: {yearsExp} años</p>
                    <p>{desc}</p>
                </Info>
                <ButtonContainer>
                    <button>Aplicar</button>
                </ButtonContainer>
            </JobCard>
        </div>
    )
}
