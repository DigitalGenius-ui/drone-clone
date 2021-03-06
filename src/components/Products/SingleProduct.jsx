import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { LocalMall } from '@material-ui/icons';
import { addItems, } from '../../redux/slice';
import { useDispatch } from 'react-redux';
import { DroneState } from '../../context/Context';

const SingleProduct = ({item}) => {
    const dispatch = useDispatch();
    const { id,img_url, title, price, disc,} = item;
    const { setMessage } = DroneState();
    const addCart = () => {
        dispatch(addItems({
            id, img_url, title, price, disc
        }));
        setMessage({
            open : true,
            text : `${title} Successfully Added`,
            type : "success"
        })
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
                ><LocalMall className="shopping"/></div>
            </Icons>
        </Footer>
    </Cart>
  );
}

export default SingleProduct;

const Cart = styled.div`
    border : 1px solid #3333339d;
    margin-left : 1rem;
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
    .shopping{
      width : 1.3rem;
      color : #333333dd;
      :hover{
        color : #05c4e6;
      }
      :active{
        color : #ff3300;
      }
    }
`