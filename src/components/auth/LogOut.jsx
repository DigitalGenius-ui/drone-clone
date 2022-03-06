import React from 'react'
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { DroneState } from '../../context/Context';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const {isAuth, setIsAuth, setMoveAuth, setMessage} = DroneState();
    const navigate = useNavigate();
    const logOut = () => {
        signOut(auth).then(() => {
            setIsAuth(false);
            navigate("/");
            setMoveAuth(false);
            localStorage.clear();
            setMessage({
                open : true,
                text : "logged out Successfully",
                type : "success"
            });
        });
    }
  return (
    <Container>
        <div className="avatar">
            <Avatar
            style={{width : "2.2rem", height : "2.2rem"}}
            />
            <div className='user'>
                <h3>{isAuth.user}</h3>
                <p>{isAuth.email}</p>
            </div>
        </div>
        <button onClick={logOut}>Log Out</button>
    </Container>
  )
}

export default LogOut;

const Container = styled.div`
    width: 100%;
    padding: 0 1rem;
    .avatar{
        display: flex;
        align-items : center;
        .user{
            margin-left: 0.8rem;
            h3{
            font-size: 0.9rem;
            font-weight: 400;
            }
            p{
                font-size: 0.7rem;
            }
        }
    }
    button{
        margin-top: 1rem;
        width: 100%;
        padding : 0.3rem 0;
        color: white ;
        background-color: #04b4d3;
        border : none;
        font-weight: 500;
        text-transform: uppercase;
        cursor: pointer;
        :hover{
            background-color: #0bbcdb;
        }
    }
`