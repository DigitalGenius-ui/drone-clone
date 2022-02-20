import React from 'react';
import SingleProduct from './SingleProduct';
import { productsData } from '../../Data/ProductsData';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Slider from 'react-slick';
import { settings } from '../slickSlider/SlickProduct';

const Products = () => {
    let productsItems = ""

    productsItems = 
    productsData.map((item, i) => (
        <SingleProduct item={item} key={i}/>
    ))
  return (
    <Texts>
        <Typography variant="h3" className="text">
            Treading Products
        </Typography>
        <div><Slider {...settings}>{productsItems}</Slider></div>
    </Texts>
  )
}

export default Products;

const Texts  =styled.div`
    width : 90%;
    margin : 0 auto;
    .text{
        text-align: center;
        font-size : 1.2rem;
        padding : 2.5rem 0;
        font-weight: 600;
        color : #3333339d;
    }
`