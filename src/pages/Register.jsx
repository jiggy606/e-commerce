import React from 'react'
import img from '../assets/img3.jpg'

import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ), url(${img}) center;
    display: flex;
    align-items: center;  
    justify-content: center; 
    background-size: cover;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 50%;
    background-color: white;
`

const Title = styled.h1`
    font-size: 25px;
    font-weight: 400;
`   

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 15px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 20px;
    background-color: #487c1d;
    color: white;
    cursor: pointer;
    font-size: 25px;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>open your account</Title>
                <Form>
                    <Input placeholder='first name' />
                    <Input placeholder='last name' />
                    <Input placeholder='email'/>
                    <Input placeholder='username'/>
                    <Input placeholder='password' />
                    <Input placeholder='confirm password' />
                    
                    <Agreement>
                        by creating an account, i consent to the processing of my personal info in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>

                    <Button>create!</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Register