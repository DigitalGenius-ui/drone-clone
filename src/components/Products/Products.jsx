import React from 'react';
import SingleProduct from './SingleProduct';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Slider from 'react-slick';
import { settings } from '../slickSlider/SlickProduct';
import { useGetAllProductsQuery } from '../../redux/fetchData';

const Products = () => {
    let productsItems = ""
    const { data, error, isLoading } = useGetAllProductsQuery();
    productsItems = 
    data?.map((item, i) => (
        <SingleProduct item={item} key={i}/>
    ));
  return (
    <Texts>
        <Typography variant="h3" className="text">
            Treading Products
        </Typography>
        {error && <div>{error}</div>}
        {isLoading && <div>...Loading</div>}
        <div><Slider {...settings}>{productsItems}</Slider></div>
    </Texts>
  )
}

export default Products;

const Texts  =styled.div`
    width : 85%;
    margin : 0 auto;
    .text{
        text-align: center;
        font-size : 1.1rem;
        padding : 2.5rem 0;
        font-weight: 600;
        color : #3333339d;
    }
`