import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 25px;
`

const Logo = styled.h1``

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const PaymentImg = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>danny.</Logo>
                <Description>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </Description>
                <SocialContainer>
                    <SocialIcon color='#3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='#E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='#55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='#E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>useful links</Title>
                <List>
                    <ListItem>home</ListItem>
                    <ListItem>cart</ListItem>
                    <ListItem>men's fashion</ListItem>
                    <ListItem>women's fashion</ListItem>
                    <ListItem>accessories</ListItem>
                    <ListItem>my account</ListItem>
                    <ListItem>order tracking</ListItem>
                    <ListItem>wishlist</ListItem>
                    <ListItem>demands</ListItem>
                    <ListItem>terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>
                    Contact
                </Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}} />
                    179 finwood road, keansburg, new jersey, 07734.
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}} />
                    +334 57818375771
                </ContactItem>
                <ContactItem>
                    <Mail style={{marginRight:"10px"}} />
                    contact@danny.dev
                </ContactItem>
                <PaymentImg src='https://i.bb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    );
}

export default Footer