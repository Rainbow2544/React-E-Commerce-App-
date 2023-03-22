import { useState } from "react";
import {ArrowLeftOutlined,ArrowRightOutlined} from "@material-ui/icons";
 import styled from "styled-components";;


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${(props) => props.bg};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: 500;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
    function handleClick(){

    }
  return (
    <Container>
        <Arrow direction="left" onClick={handleClick}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex="">
            <Slide bg="f5fafd">
                <ImgContainer>
                    <Image src="https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>THIS IS TTLE</Title>
                    <Desc>THIS IS DESC</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>

            <Slide>
                <ImgContainer>
                    <Image src="https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>THIS IS TTLE</Title>
                    <Desc>THIS IS DESC</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined />
        </Arrow>
        
    </Container>
  )
}

export default Slider;