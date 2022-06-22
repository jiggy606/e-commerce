import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: #487c1d;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            super deal. free shipping on orders over #10,000
        </Container>
    );
}

export default Announcement