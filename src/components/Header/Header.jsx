import React from 'react';
import { AppBar, Badge, makeStyles, Toolbar, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { ExitToApp, FavoriteBorder, ShoppingBasket } from '@material-ui/icons';

// https://digitalgenius-ui.github.io/drone/
const Header = () => {
  const useStyles = makeStyles((theme) => ({
    customBadge:{
      backgroundColor : "#05c4e6",
      color : "white"
    }
  }));
  const classes = useStyles();
  return (
    <AppBar color="transparent" position='static'>
        <Toolbar>
            <Content>
              <Burger>
                  <div className='line'></div>
              </Burger>
              <Typography variant="h4" className="logo">
                Droner
              </Typography>
              <Icons>
                <Icon>
                  <Badge badgeContent={4} classes={{badge : classes.customBadge}}>
                    <FavoriteBorder style={{width : "1.3rem"}}/></Badge>
                </Icon>
                <Icon>
                  <Badge badgeContent={4} classes={{badge : classes.customBadge}}>
                    <ShoppingBasket style={{width : "1.3rem"}}/></Badge>
                </Icon>
                <Login><ExitToApp className="login"/></Login>
              </Icons>
            </Content>
        </Toolbar>
    </AppBar>
  )
}

export default Header;

const Content = styled.div`
  display : flex;
  align-items : center;
  justify-content : space-between;
  width : 100%;
  .logo{
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color : #3333339d;
  }
`

const Burger = styled.div`
    width : 40px;
    height: 40px;
    display : flex;
    align-items : center;
    justify-content : center;
    cursor: pointer;
    .line{
      width : 22px;
      height : 2.7px;
      background-color :#05c4e6;
      position : relative;
      :before, :after{
        content : '';
        position : absolute;
        width : 22px;
        height : 2.7px;
        background-color :#05c4e6;
      }
      :before{
        transform : translateY(7px)
      }
      :after{
        transform : translateY(-7px)
      }

    }
`

const Icons = styled.div`
  display: flex;
  align-items : center;
`

const Icon = styled.div`
  color : #3333339d;
  margin-right: 1.5rem;
  cursor : pointer;
`

const Login = styled.div`
      width : 40px;
      height: 40px;
      display : flex;
      align-items : center;
      justify-content : center;
      margin-left: 1rem;
      cursor : pointer;
      :hover{
        background-color: #61b830;
        color : white;
      }
    .login{
      width :1.3rem;
      color : #3333339d;
      :hover{
        color : white;
      }
    }
`