import styled from 'styled-components';
import React from 'react'
import { DroneState } from '../context/Context';

const SignIn = () => {
    const {setMoveAuth} = DroneState();
  return (
    <Container>
        <h2>You are not Signed in</h2>
        <h4>To see your shopping cart please kindly sign in</h4>
        <button onClick={() => setMoveAuth(true)}>Sign in</button>
    </Container>
  )
}

export default SignIn;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2{
        text-transform: uppercase;
    }
    h4{
        padding: 1rem 0;
    }
    button{
        padding: 0.5rem 2rem;
        text-transform: uppercase;
        cursor: pointer;
        border: none;
        background-color: #05c4e6;
        border-radius: 4px;
        color: white;
        :hover{
            background-color: #05abc9;
        }
    }
`