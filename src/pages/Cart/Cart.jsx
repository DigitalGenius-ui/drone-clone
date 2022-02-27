import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTotal } from '../../redux/slice';
import SingleCart from './SingleCart';

const Cart = () => {
    const cartItems = useSelector((state) => state.products.cart);
    const cart = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotal())
    },[cart, dispatch])
  return (
    <Container>
        <Products>
            {cartItems.length === 0 ? (<h2>Your Shopping Cart is Empty!</h2>) : (<>
                {cartItems.map((item, i) => (
                <SingleCart item={item} key={i}/>
            ))}
            </>)}
        </Products>
        <Items>
            <LikedItems></LikedItems>
            <Subtotal>
                <Texts>
                    <h3>Subtotal</h3>
                    <h3>$({(cart.cartTotalAmount).toFixed(2)})</h3>
                </Texts>
                <p>Taxes and shipping calculated at checkout</p>
                <button>Proceed The Payment</button>
            </Subtotal>
        </Items>
    </Container>
  )
}

export default Cart

const Container = styled.div`
    width : 90%;
    margin : 1rem auto;
    display: flex;
    gap: 1rem;
    @media(max-width : 890px){
        flex-direction: column-reverse;
    }
    `
const LikedItems = styled.div`
    background-color: #ebebeb;
    width : 23rem;
    @media(max-width : 973px){
        width : 19rem;
    }
    @media(max-width : 890px){
        flex: 1;
    }
    @media(max-width : 600px){
        width : 100%;
    }
`
const Subtotal = styled.div`
    background-color: #ebebeb;
    width : 23rem;
    margin-top: 1rem;
    padding: 0.6rem;
    @media(max-width : 973px){
        width : 19rem;
    }
    @media(max-width : 890px){
        flex: 1;
        margin-top:0;
    }
    @media(max-width : 600px){
        width : 100%;
    }
    p{
        padding : 0.5rem 0;
    }
    button{
        width : 100%;
        margin-top: 0.7rem;
        padding : 0.7rem 1rem;
        background-color: #05c4e6;
        color : white;
        cursor: pointer;
        border : none;
        font-size: 0.9rem;
        font-weight: 500;
        border-radius: 4px;
    }
`
const Items = styled.div`
    display : flex;
    flex-direction: column;
    @media(max-width : 890px){
        flex-direction: row;
        gap: 1rem;
    }
    @media(max-width : 600px){
        flex-direction: column;
    }
`
const Products = styled.div`
    flex : 1;
`
const Texts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3{
        padding-bottom : 0.5rem;
    }
`