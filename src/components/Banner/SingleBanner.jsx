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
    background-color : #c7e6ff2b;
    display : flex;
    align-items: flex-end;
    justify-content: center;
    height: 380px;
    position : relative;
    @media(max-width : 700px){
        align-items: center;
    }
`
const Img = styled.div``
const Image = styled.img`
    width : 27rem;
    @media(max-width : 910px){
        width: 23rem;
    }
    @media(max-width : 650px){
        width: 19rem;
    }
    @media(max-width : 589px){
        width: 17rem;
    }
`
const Text = styled.div`
    margin-bottom: 3rem;
        @media(max-width : 700px){
            position : absolute;
            left : 10%;
            bottom : 0;
        }
    h3{
        font-size: 2rem;
        text-transform: uppercase;
        color : #3333339d;
        @media(max-width : 910px){
            font-size: 1.6rem;
        }
        @media(max-width : 700px){
            font-size: 1.4rem;
        }
        @media(max-width : 589px){
            font-size: 1rem;
        }
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
        @media(max-width : 910px){
            font-size: 1.6rem;
        }
        @media(max-width : 700px){
            font-size: 1.3rem;
        }
        @media(max-width : 589px){
            font-size: 1rem;
        }
    }
`
const Add = styled.div`
    margin-bottom: 3rem;
    @media(max-width : 700px){
        position : absolute;
        right : 15%;
        bottom : 0;
    }
    .btn{
        background-color: #05900ca5;
        text-transform: uppercase;
        color: white;
        border-radius: 50px;
        padding:0.5rem 1.5rem;
        border : none;
        cursor : pointer;
        font-size: 0.9rem;
        @media(max-width : 910px){
            font-size: 0.8rem;
        }
        @media(max-width : 700px){
            font-size: 0.7rem;
        }
        :hover{
            background-color: #05900cbc;
        }
    }
    h4{
        font-size: 2.5rem;
        font-weight: 400;
        color : #3333339d;
        @media(max-width : 910px){
            font-size: 2.1rem;
        }
        @media(max-width : 700px){
            font-size: 1.9rem;
        }
        span{
            font-size: 1.2rem;
            text-transform: uppercase;
        }
    }
`