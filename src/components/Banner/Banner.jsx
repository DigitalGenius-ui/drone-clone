import React from 'react'
import Slider from 'react-slick';
import { useGetAllSlidesQuery } from '../../redux/fetchData';
import { settings } from '../slickSlider/SettingSlick';
import SingleBanner from './SingleBanner';
import Skeleton from '@material-ui/lab/Skeleton';
import styled from 'styled-components';

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
    {isLoading && <Loading>
      <div className='loading'>
        <Skeleton animation="wave" variant="rect" width={300} height={40}/>
        <Skeleton animation="wave" variant="rect" width={300} height={40}/>
      </div>
        <Skeleton animation="wave" variant="circle" width={230} height={230}/>
      <div className='loading'>
        <Skeleton animation="wave" variant="rect" width={300} height={40}/>
        <Skeleton animation="wave" variant="rect" width={300} height={40}/>
      </div>
    </Loading>}
    <div style={{overflow : "hidden"}}><Slider {...settings}>{productsItems}</Slider></div>
    </>
  )
}

export default Banner;

const Loading = styled.div`
  display  :flex;
  align-items: flex-end;
  justify-content: center;
  gap : 2rem;
  margin : 1rem;
  height: 340px;
  .loading{
    display  :flex;
    flex-direction: column;
    gap : 0.5rem;
  }
`