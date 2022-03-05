import React from 'react'
import styled from 'styled-components';
import { DroneState } from '../../context/Context';
import Login from './Login'
import SignUp from './SignUp';

const Container = () => {
    const { move } = DroneState();
  return (
    <Wrapper move={move}>
        <div className="signin">
            <Login />
        </div>
        <div className='signup'>
            <SignUp/>
        </div>
    </Wrapper>
  )
}

export default Container;

const Wrapper = styled.div`
    width: 15rem;
    background-color: #3a3a3a;
    color: white;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    position: relative;
    overflow:hidden;
    .signup{
        position: absolute;
        right : ${props => props.move ? "0" : "-15rem"};
        transition: all 500ms ease-in-out;
    }
    .signin{
        transition: all 500ms ease-in-out;
        transform: ${props => props.move ? "translateX(-15rem)" : "translateX(0)"};
    }
`