import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 20px;
    }

    p {
        width: 60%;
        line-height: 32px;
    }
`;

export default function Trayectoria() {
    return (
        <Container>
            <h1>Trayectoria</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati doloribus sequi commodi labore ad non numquam
                voluptates facilis repellat in, sit cumque, facere, iure
                repellendus quidem quisquam officiis sed recusandae.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati doloribus sequi commodi labore ad non numquam
                voluptates facilis repellat in, sit cumque, facere, iure
                repellendus quidem quisquam officiis sed recusandae.
            </p>
        </Container>
    )
}
