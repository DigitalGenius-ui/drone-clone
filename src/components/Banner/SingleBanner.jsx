import React from 'react';
import styled from 'styled-components';
import  { addItems } from '../../redux/slice';
import { useDispatch } from 'react-redux';

const SingleBanner = ({item, error}) => {
    const { id, title, tagline, img_url, price, disc } = item;
    const dispatch = useDispatch();
    const addCart = () => {
        dispatch(addItems({
            id, title, img_url, tagline, price, disc
        }))
    }
  return (
        <Products>
            <Text>
                <h3 className='name'>{title}</h3>
                <h2 className='tag'>{tagline}</h2>
            </Text>
            <Img>
                <Image src={img_url} />
            </Img>
            <Add>
                <h4>${price}
                <span>only</span>
                </h4>
                <button 
                onClick={addCart}
                className='btn'>add to cart</button>
            </Add>
        </Products>
  );
}

export default SingleBanner;

const Products = styled.div`
    background-color : #c7e6ff21;
    display : flex;
    align-items : flex-end;
    justify-content: center;
    height: 380px;
`
const Img = styled.div``
const Image = styled.img`
    width : 27rem;
`
const Text = styled.div`
    margin-bottom: 3rem;
    h3{
        font-size: 2rem;
        text-transform: uppercase;
        color : #3333339d;
    }
    .name{
        background-color: #c7c7c7;
        display : flex;
        align-items : flex-end;
        justify-content: center;
        padding : 0.2rem 0.5rem;
    }
    .tag{
        background-color: #0fbfc5;
        color: white;
        display : flex;
        align-items : flex-end;
        justify-content: center;
        padding : 0.2rem 0.5rem;
        margin-top: 0.3rem;
        margin-left: 0.8rem;
        text-transform: uppercase;
    }
`
const Add = styled.div`
    margin-bottom: 3rem;
    .btn{
        background-color: #05900ca5;
        text-transform: uppercase;
        color: white;
        border-radius: 50px;
        padding:0.5rem 1.5rem;
        border : none;
        cursor : pointer;
        font-size: 0.9rem;
        :hover{
            background-color: #05900cbc;
        }
    }
    h4{
        font-size: 2.5rem;
        font-weight: 400;
        color : #3333339d;
        span{
            font-size: 1.2rem;
            text-transform: uppercase;
        }
    }
`