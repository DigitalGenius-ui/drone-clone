import React from "react";
import styled from "styled-components";
import { removeItem, decreaseQuantity, addItems } from '../../redux/slice';
import { useDispatch } from 'react-redux';

const SingleCart = ({item}) => {
    const { id,img_url, title, tagline, price, disc, cartQuantity } = item;
    const dispatch = useDispatch();
    const deleteCart = () => {
        dispatch(removeItem({
            id
        }))
    }
    const decreaseCart = () => {
        dispatch(decreaseQuantity({
            id
        }))
    }
  return (
    <Items>
      <Img>
        <Image src={img_url} alt="cartPhoto" />
      </Img>
      <Right>
      <Text>
        <h2>
          <span>{title}</span>
          <span>{tagline}</span>
        </h2>
        <p>{disc}.</p>
        <p className="price">${(price * cartQuantity).toFixed(2)}</p>
      </Text>
      <AddBtns>
          <button onClick={decreaseCart}>-</button>
          <span>{cartQuantity}</span>
          <button onClick={() => dispatch(addItems({id}))}>+</button>
      </AddBtns>
        <button
        onClick={deleteCart}
         className="delete">Delete</button>
      </Right>
    </Items>
  );
};

export default SingleCart;

const Items = styled.div`
    padding : 1rem;
    background-color: #ebebeb;
    display : flex;
    gap : 1rem;
    margin-bottom : 1rem;
    @media(max-width : 600px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h2{
        display: flex;
        gap : 0.5rem;
        span{
            text-transform: capitalize;
        }
    }
`
const Text = styled.div`
    p{
        padding : 0.2rem 0;
        line-height: 1.4rem;
        text-transform : capitalize;
    }
    .price{
        font-size: 1.2rem;
        font-weight: 600;
    }
`
const Img = styled.div`
    background-color: white;
    width : 14rem;
    display : flex;
    align-items: center;
    justify-content: center;
    @media(max-width : 600px){
        width : 100%;
    }
`
const Image = styled.img`
    width : 14rem;
    height: 10rem;
    object-fit: contain;
`
const AddBtns = styled.div`
    margin-top: 0.5rem;
    button{
        width: 1.5rem;
        height: 1.5rem;
        cursor : pointer;
    }
    span{
        padding : 0 0.5rem;
    }
`
const Right = styled.div`
    .delete{
        border : none;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
        background-color: transparent;
        margin-top: 1rem;
        padding : 0 0.7rem;
        cursor: pointer;
        :hover{
          color : #05c4e6;
        }
        :active{
          color : #ff3300;
        }
    }
`
