import React from 'react';
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    cursor: pointer;
    text-decoration: underline;
    margin: 0px 15px;
`;

const TopButton = styled.button`
    padding: 10px ;
    cursor: pointer;
    font-weight: 600;
    border: ${(props) => props.type === "filled" && "none"};
    color: ${(props) => props.type === "filled" && "white"};
    background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
`;



const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const Info = styled.div`
    flex: 3;
`;

const Product  = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail  = styled.div`
    flex: 2;
    display: flex;
`;

const Details  = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-between;
`;

const Image  = styled.img`
    width: 200px;
`;

const ProductName  = styled.span``;

const ProductId  = styled.span``;

const ProductColor  = styled.div`
    background-color: ${(props) => props.color};
    width: 20px;
    height: 20px;
`;

const ProductSize  = styled.span``;

const PriceDetail  = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductAmount  = styled.div`
    margin: 0px 20px;
    
`;

const ProductPrice = styled.div`
    margin-top: 20px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div``;

const SummaryTitle = styled.h1``;

const SummaryItem = styled.div``;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button``;

function Cart() {
  return (
    <Container >
        <Announcement />
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                            <Details>
                                <ProductName>
                                    <b>Product:</b> JESSIE THUNDER SHOES
                                </ProductName>
                                <ProductId><b>ID:</b> 93813718293</ProductId>
                                <ProductColor color="black" />
                                <ProductSize>
                                    <b>Size:</b> 37.5
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                    <ProductDetail>
                        <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                        <Details>
                            <ProductName>
                                <b>Product:</b> HAKURA T-SHIRT
                            </ProductName>
                            <ProductId>
                                <b>ID:</b> 93813718293
                            </ProductId>
                            <ProductColor color="gray" />
                            <ProductSize>
                                <b>Size:</b> M
                            </ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>1</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$ 20</ProductPrice>
                    </PriceDetail>
                    </Product>

                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total"> 
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                </Summary>
                <Button>CHECKOUT NOW</Button>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart