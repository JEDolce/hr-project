import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden; 
    /* z-index: -100; */
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f7eeee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const InfoContainer = styled.div`
    flex: 1;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Text = styled.p`
    font-size: 20px;
    margin: 50px 0;
    font-weight: 500;
    letter-spacing: 3px;
`;

// const ImageContainer = styled.div`
//     height: 100%;
//     flex: 1;
// `;

// const Image = styled.img`
//     height: 80%;
// `;

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    useEffect(() => {
        let slider = setInterval(() => {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }, 10000);
        return () => clearInterval(slider);
    }, [slideIndex]);

    return (
        <div>
            <Container>
                <Arrow direction="left" onClick={() => { handleClick('left') }}>
                    <ArrowLeftOutlined />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map((item) => (
                        <Slide key={item.id} style={{ backgroundImage: `url(${item.img})` }}>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Text>{item.text}</Text>
                            </InfoContainer>
                            {/* <ImageContainer>
                                <Image src={item.img} alt="" />
                            </ImageContainer> */}
                        </Slide>
                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={() => { handleClick('right') }}>
                    <ArrowRightOutlined />
                </Arrow>
            </Container>
        </div>

    )
}
