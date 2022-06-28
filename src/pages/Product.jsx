import { Add, Remove } from '@material-ui/icons';
import React from 'react'

import styled from 'styled-components';

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h2`
    font-weight: 300;
`

const Description = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 45px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 30px 0px;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-weight: 300;
    font-size: 20px;
`

const FilterColour = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
` 

const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid #487c1d;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 3px solid #487c1d;
    cursor: pointer;
    font-weight: 500

    &:hover {
        background-color: white;
        transition: all 0.5s ease;
    }
`


const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />

            <Wrapper>
                <ImgContainer>
                    <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
                </ImgContainer>

                <InfoContainer>
                    <Title>jean jacket</Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </Description>
                    <Price>#10,000</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>colour:</FilterTitle>
                            <FilterColour color='black' />
                            <FilterColour color='blue' />
                            <FilterColour color='gray' />
                            <FilterColour color='green' />
                        </Filter>

                        <Filter>
                            <FilterTitle>size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                            </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>add to cart</Button>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>

            <Newsletter />
            <Footer />
        </Container>
    );
}

export default Product