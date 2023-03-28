import React from 'react';
import Slider from 'react-slick';
// import { useGetAllSlidesQuery } from '../../redux/fetchData';
import { settings } from '../slickSlider/SettingSlick';
import SingleBanner from './SingleBanner';
// import Skeleton from '@material-ui/lab/Skeleton';
import styled from 'styled-components';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import datas from "../../Data/data.json";

const Banner = () => {
  // const { data, error, isLoading } = useGetAllSlidesQuery();

  let productsItems = ""
    productsItems = 
    datas.slider.map((item, i) => (
        <SingleBanner item={item} key={i}/>
    ));
    const slider = React.useRef(null);
  return (
    <>
      {/* {error && <div>something went wrong</div>}
    {isLoading && <Loading>
      <div className='loading'>
        <Skeleton animation="wave" variant="rect" className='lines'/>
        <Skeleton animation="wave" variant="rect" className='lines'/>
      </div>
        <Skeleton animation="wave" variant="circle" className="circle"/>
      <div className='loading'>
        <Skeleton animation="wave" variant="rect" className='lines'/>
        <Skeleton animation="wave" variant="rect" className='lines'/>
      </div>
    </Loading>} */}
      <Slides style={{ overflow: "hidden" }}>
        <Slider ref={slider} {...settings}>
          {productsItems}
        </Slider>
        <button className="prev" onClick={() => slider?.current?.slickNext()}>
          <ArrowForwardIosIcon />
        </button>
        <button className="next" onClick={() => slider?.current?.slickPrev()}>
          <ArrowBackIosNewIcon />
        </button>
      </Slides>
    </>
  );
}

export default Banner;

// const Loading = styled.div`
//   display  :flex;
//   align-items: flex-end;
//   justify-content: center;
//   gap : 2rem;
//   margin : 1rem;
//   height: 340px;
//   @media(max-width : 770px){
//     height: 300px;
//   }
//   @media(max-width : 500px){
//     height: 200px;
//   }
//   .loading{
//     display  :flex;
//     flex-direction: column;
//     gap : 0.5rem;
//     .lines{
//       width : 15rem;
//       height: 2rem;
//       @media(max-width : 770px){
//         width : 12rem;
//         height: 2rem;
//       }
//       @media(max-width : 650px){
//         width : 10rem;
//         height: 2rem;
//       }
//       @media(max-width : 560px){
//         width : 8rem;
//         height: 1.5rem;
//       }
//       @media(max-width : 480px){
//         width : 6rem;
//         height: 1rem;
//       }
//       @media(max-width : 360px){
//         width : 5rem;
//         height: 1rem;
//       }
//     }
//   }
//   .circle{
//     width :230px; 
//     height : 230px;
//     @media(max-width : 830px){
//       width :200px; 
//       height : 200px;
//     }
//     @media(max-width : 670px){
//       width :180px; 
//       height : 180px;
//     }
//     @media(max-width : 590px){
//       width :150px; 
//       height : 150px;
//     }
//     @media(max-width : 510px){
//       width :130px; 
//       height : 130px;
//     }
//     @media(max-width : 440px){
//       width :100px; 
//       height : 100px;
//     }
//   }
// `
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
