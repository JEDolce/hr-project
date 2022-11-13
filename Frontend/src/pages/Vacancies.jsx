import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { jobs } from '../data';
import styled from 'styled-components';

const Title = styled.h1`
    padding: 1rem 4rem;
`;

const JobContainer = styled.div`
    margin: 2rem 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px; 
    position: center;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;  */
`;

export default function Vacancies() {
    return (
        <div>
            <Navbar />
            <Title>Aplica a Nuestras Busquedas:</Title>
            <JobContainer>
                {jobs.map((job) => (
                    <Card key={job.id} job={job} />
                ))}
            </JobContainer>
            <Footer />
        </div>
    )
}
