import { Send } from '@material-ui/icons';
import React from 'react'

import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    font-weight: 800;
`

const Description = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 400;
`

const InputContainer = styled.div`
    width: 50%;
    height: 35px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #487c1d;
    color: white;
`


const Newsletter = () => {
    return (
        <Container>
            <Title>newsletter</Title>
            <Description>get updates from your fav products</Description>
            <InputContainer>
                <Input placeholder='your email'></Input>
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    );
}

export default Newsletter