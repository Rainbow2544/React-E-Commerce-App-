import React from 'react';
import styled from 'styled-components';
import {ShoppingCartOutlined, SearchOutlined,FavoriteBorderOutlined  } from "@material-ui/icons";

const Container = styled.div`
    height: 70vh;
    width: 100%;
    flex: 1;
`
const Circle = styled.div`
    
`

const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Info = styled.div`
   display: flex;
`

const Icon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

function Product({item}) {
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined  />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined  />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product;