import React from 'react'
import Slider from 'react-slick';
import { useGetAllSlidesQuery } from '../../redux/fetchData';
import { settings } from '../slickSlider/SettingSlick';
import SingleBanner from './SingleBanner';
import Skeleton from '@material-ui/lab/Skeleton';
import styled from 'styled-components';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';

const Banner = () => {
  const { data, error, isLoading } = useGetAllSlidesQuery();
  let productsItems = ""
    productsItems = 
    data?.map((item, i) => (
        <SingleBanner item={item} key={i}/>
    ));
    const slider = React.useRef(null);
  return (
    <>
    {error && <div>something went wrong</div>}
    {isLoading && <Loading>
      <div className='loading'>
        <Skeleton animation="wave" variant="rect" width={300} height={40}/>
        <Skeleton animation="wave" variant="rect" width={300} height={40}/>
      </div>
        <Skeleton animation="wave" variant="circle" className="circle"/>
      <div className='loading'>
        <Skeleton animation="wave" variant="rect" width={300} height={40}/>
        <Skeleton animation="wave" variant="rect" width={300} height={40}/>
      </div>
    </Loading>}
    <Slides style={{overflow : "hidden"}}>
    <Slider ref={slider} {...settings}>{productsItems}</Slider>
      <button
      className='prev'
       onClick={() => slider?.current?.slickNext()}><ArrowBackIos/></button>
      <button
      className='next'
      onClick={() => slider?.current?.slickPrev()}><ArrowForwardIos/></button>
    </Slides>
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
  .circle{
    width :230px; 
    height : 230px;
  }
`
const Slides = styled.div`
  position : relative;
  .prev{
    position : absolute;
    top : 45%;
    left : 3%;
    background-color: transparent;
    cursor : pointer;
    border : none;
    color: #05c4e6;
  }
  .next{
    position : absolute;
    top : 45%;
    right : 3%;
    background-color: transparent;
    cursor : pointer;
    border : none;
    color: #05c4e6;
  }
`