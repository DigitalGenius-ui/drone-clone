import React from 'react'
import Slider from 'react-slick';
import { useGetAllSlidesQuery } from '../../redux/fetchData';
import { settings } from '../slickSlider/SettingSlick';
import SingleBanner from './SingleBanner';

const Banner = () => {
  const { data, error, isLoading } = useGetAllSlidesQuery();
  let productsItems = ""
    productsItems = 
    data?.map((item, i) => (
        <SingleBanner item={item} key={i}/>
    ))
  return (
    <>
    {error && <div>something went wrong</div>}
    {isLoading && <div>...Loading</div>}
    <div style={{overflow : "hidden"}}><Slider {...settings}>{productsItems}</Slider></div>
    </>
  )
}

export default Banner