import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleCart from './SingleCart';

const Cart = () => {
    const cartItems = useSelector((state) => state.products.cart);
  return (
    <Container>
        <Products>
            {cartItems.map((item) => (
                <SingleCart item={item} key={item.id}/>
            ))}
        </Products>
        <Items>
            <LikedItems>hi</LikedItems>
            <Subtotal>h2</Subtotal>
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
    `
const LikedItems = styled.div`
    background-color: #ebebeb;
    width : 20rem;
`
const Subtotal = styled.div`
    background-color: #ebebeb;
    width : 20rem;
    margin-top: 1rem;
`
const Items = styled.div``
const Products = styled.div`
`