import React from 'react'
import Slider from 'react-slick';
import { sliderData } from '../../Data/SliderData';
import { settings } from '../slickSlider/SettingSlick';
import SingleBanner from './SingleBanner';

const Banner = () => {
  let productsItems = ""

    productsItems = 
    sliderData.map((item, i) => (
        <SingleBanner item={item} key={i}/>
    ))
  return (
    <div style={{overflow : "hidden"}}><Slider {...settings}>{productsItems}</Slider></div>
  )
}

export default Banner