import React from 'react'
import img1 from '../assets/img3.jpg'
import img2 from '../assets/img33.jpg'

import {Link} from 'react-router-dom'

import styled from 'styled-components';

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props=>props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props=>props.type === 'filled' && 'white'};
`

const TopTexts = styled.div`
`

const TopText = styled.span`
    margin: 0px 10px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        color: blue;
    }
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 280px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductID = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color}
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 300;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"}
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />

            <Wrapper>
                <Title>your bag</Title>

                <Top>
                    <TopButton>continue shopping</TopButton>
                    <TopTexts>
                        <TopText>shopping bag(2)</TopText>
                        <TopText>your wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>checkout</TopButton>
                </Top>

                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={img1} />
                                <Details>
                                    <ProductName><b>product:</b> jordan 1 "uni blue"</ProductName>
                                    <ProductID><b>id:</b> 147563310</ProductID>
                                    <ProductColor color='black' />
                                    <ProductColor color='#A1E9F7' />
                                    <ProductSize><b>size:</b> 12</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>#10,000</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src={img2} />
                                <Details>
                                    <ProductName><b>product:</b> jordan 1 "other"</ProductName>
                                    <ProductID><b>id:</b> 147563310</ProductID>
                                    <ProductColor color='#76E1F7' />
                                    <ProductColor color='#BB3724' />
                                    <ProductSize><b>size:</b> 15</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>#15,000</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>subtotal</SummaryItemText>
                            <SummaryItemPrice>#30,000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>shipping total</SummaryItemText>
                            <SummaryItemPrice>#2,000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>shipping discount</SummaryItemText>
                            <SummaryItemPrice># -500</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>total</SummaryItemText>
                            <SummaryItemPrice>#31,500</SummaryItemPrice>
                        </SummaryItem>
                        <Link to='/product'>
                            <Button>checkout now</Button>
                        </Link>
                    </Summary>
                </Bottom>

            </Wrapper>

            <Footer />
        </Container>
    );
}

export default Cart