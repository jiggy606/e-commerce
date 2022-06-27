import React from 'react'
import img from '../assets/img5.jpg'

import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ), url(${img}) center;
    background-size: cover;
    display: flex;
    align-items: center;  
    justify-content: center; 
`

const Wrapper = styled.div`
    padding: 20px;
    width: 30%;
    background-color: white;
`

const Title = styled.h1`
    font-size: 25px;
    font-weight: 400;
`   

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 20px;
    background-color: #487c1d;
    color: white;
    cursor: pointer;
    font-size: 25px;
    margin-bottom: 10px
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        color: blue;
    }
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>sign in</Title>
                <Form>
                    <Input placeholder='username'/>
                    <Input placeholder='password' />

                    <Button>login</Button>

                    <Link>can't remember password</Link>
                    <Link>create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login