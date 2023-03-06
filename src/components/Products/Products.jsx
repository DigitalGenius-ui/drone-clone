import React from 'react';
import SingleProduct from './SingleProduct';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Slider from 'react-slick';
import { settings } from '../slickSlider/SlickProduct';
import { useGetAllProductsQuery } from '../../redux/fetchData';
import { DroneState } from '../../context/Context';

const Products = () => {
    let productsItems = ""
    const { data, error } = useGetAllProductsQuery();
    const { search } = DroneState(); 
    productsItems = 
    data?.products.filter((sear) => (
        sear.title.toLowerCase().includes(search)
    )).map((item, i) => (
        <SingleProduct item={item} key={i}/>
    ));
  return (
    <Texts>
        <Typography variant="h3" className="text">
            Treading Products
        </Typography>
        {error && <div>{error}</div>}
        <div
        className='slider'
        ><Slider {...settings}>{productsItems}</Slider></div>
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
    .slider{
        .slick-dots{
            width: 100%;
            text-align : right;
            bottom : -40px;
            li{
                margin : 0 3px;
                button{
                    ::before{
                        font-size : 10px;
                    }
                }
            }
            }
        }
`