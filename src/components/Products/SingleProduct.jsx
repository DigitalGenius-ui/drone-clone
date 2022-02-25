import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { LocalMall, FavoriteBorder } from '@material-ui/icons';
import { addItems } from '../../redux/slice';
import { useDispatch } from 'react-redux';

const SingleProduct = ({item}) => {
    const dispatch = useDispatch();
    const { img_url, title, price, disc} = item;
    const addCart = () => {
        dispatch(addItems({
            img_url, title, price, disc
        }))
    }
  return (
    <Cart>
        <Img>
            <Image src={img_url}/>
        </Img>
        <Typography className="title" variant="h6">
            {title}
        </Typography>
        <Footer>
            <Typography variant="h6" className="price">
                ${price}
            </Typography>
            <Icons>
                <div
                onClick={addCart}
                ><LocalMall style={{fontSize : "1.3rem", color : "#333333dd"}}/></div>
                <div><FavoriteBorder style={{fontSize : "1.3rem", color : "#333333dd"}}/></div>
            </Icons>
        </Footer>
    </Cart>
  )
}

export default SingleProduct;

const Cart = styled.div`
    border : 1px solid #3333339d;
    margin-right : 1rem;
    .title{
        margin : 0 0.5rem;
        padding : 0.5rem 0;
        font-weight: 600;
        font-size : 0.9rem;
        border-bottom: 1px solid #3333339d;
    }
`
const Img = styled.div`
    padding : 0.5rem ;
`
const Image = styled.img`
    width : 100%;
    height : 10rem;
    object-fit: cover;
`
const Footer = styled.div`
    display : flex;
    align-items : center;
    justify-content: space-between;
    padding : 0.4rem 0;
    .price{
        margin : 0 0.5rem;
        padding : 0.5rem 0;
        font-weight: 700;
        font-size : 1rem;
        color : #0fa5aa;
    }
`
const Icons = styled.div`
    display : flex;
    align-items : center;
    margin-right : 0.2rem;
    div{
        margin-right: 0.2rem;
        cursor : pointer;
    }
`