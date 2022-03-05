import React from 'react';
import styled from 'styled-components';
import {ArrowRight} from '@material-ui/icons';
import { DroneState } from '../../context/Context';

const Login = () => {
    const { setMove, move } = DroneState();
  return (
    <Container>
        <Head>
            <h2>login</h2>
        </Head>
        <Body>
            <input className='user' type="text" placeholder='Username'/>
            <div className='pass'>
                <input type="Password" placeholder='Password' className='password'/>
                <button className='btn'><ArrowRight/></button>
            </div>
            <p>forget password</p>
        </Body>
        <Foot>
            <p>Don't Have An Account?</p>
            <button 
            onClick={() => setMove(!move)}
            className='btn'>Create Account<ArrowRight/></button>
        </Foot>
    </Container>
  )
}

export default Login;

const Container = styled.div`
    width : 15rem;
`
const Head = styled.div`
    h2{
        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: 400;
        text-align: center;
    }
`
const Body = styled.div`
    padding: 0 1rem;
    input{
        text-align: center;
        background-color: #646464;
        border : none;
        outline: none;
        color: white;
        ::placeholder{
            color: #acacac;
            font-size: 0.7rem;
        }
    }
    .user{
        width: 100%;
        padding: 0.4rem 0.3rem;
        border-radius: 50px;
        margin-top: 1rem;
    }
    .password{
        background-color: transparent;
        width: 100%;
    }
    .pass{
        margin-top: 0.5rem;
        background-color: #646464;
        border-radius: 50px;
        overflow: hidden;
        position: relative;
        padding: 0.3rem 0.3rem;
    }
    .btn{
        position: absolute;
        right:-0.1rem;
        top: 0;
        width: 2.3rem;
        border: none;
        padding: 0.1rem 0;
        cursor: pointer;
        background-color: #0aaf54;
        :hover{
            background-color: #03ca5d;
        }
        color: white;
    }
    p{
        text-align: center;
        text-transform: capitalize;
        font-size: 0.7rem;
        color: #979595;
        padding : 0.5rem 0;
        cursor: pointer;
        :hover{
            color: #b8b6b6;
        }
    }
`
const Foot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;
    padding-top: 0.5rem;
    border-top: 1px solid white;
    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        background-color: #0aaf54;
        color: white;
        padding: 0.2rem 0;
        padding-left: 0.6rem;
        border-radius: 50px;
        margin-top: 0.5rem;
        :hover{
            background-color: #03ca5d;
        }
    }
    p{
        font-size: 0.8rem;
    }
`