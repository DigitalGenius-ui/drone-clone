import React, { useEffect } from 'react';
import { AppBar, Badge, makeStyles, Toolbar, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { ExitToApp, Search, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTotal } from '../../redux/slice';

const Header = ({setSearch}) => {
  const useStyles = makeStyles((theme) => ({
    customBadge:{
      backgroundColor : "#05c4e6",
      color : "white"
    }
  }));
  const classes = useStyles();
  const cart = useSelector((state) => state.products);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal())
  },[cart, dispatch])

  return (
    <AppBar color="transparent" position='static'>
        <Toolbar>
            <Content>
              <Burger>
                  <div className='line'></div>
              </Burger>
              <Link to="/">
                <Typography variant="h4" className="logo">
                  Droner
                </Typography>
              </Link>
              <Icons>
                <Input>
                  <input 
                  onChange={(e) => setSearch(e.target.value)}
                  className='search'
                  type="text" placeholder='search'/>
                  <Search style={{color : "#3333339d"}}/>
                </Input>
                <Icon>
                  <Link to="/cart">
                  <Badge badgeContent={cart.cartTotalQuantity} classes={{badge : classes.customBadge}}>
                    <ShoppingBasket className="shopping"/></Badge>
                  </Link>
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
  a{
    color : #3333339d;
    text-decoration: none;
  }
  .logo{
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color : #3333339d;
    @media(max-width : 460px){
      font-size : 1.3rem;
    }
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
const Input = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 1rem;
  .search{
    border : none;
    border-bottom: 1px solid #3333339d;
    padding : 0.5rem 1rem;
    outline : none;
  }
  @media(max-width : 612px){
    display : none;
  }
`

const Icon = styled.div`
  color : #3333339d;
  margin-right: 1.5rem;
  cursor : pointer;
  .shopping{
      width : 1.4rem;
      :hover{
        color : #05c4e6;
      }
      :active{
        color : #ff3300;
      }
    }
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