import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Hire = () => {
  return (
    <Contents>
      <Typography className="title" variant="h4">
        Hire a Photographer
      </Typography>
      <Items>
        <Img>
          <img
          style={{width : "20rem"}} 
          src="https://digitalgenius-ui.github.io/drone/images/home4.png" alt="drone" />
        </Img>
        <Typography variant="h4" className="hire">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Tempora illum consectetur rem harum sequi saepe numquam, 
          quasi, eaque dolor totam deserunt nulla.
        </Typography>
        <Btns>
          <button className="btn">Browse Directory<ArrowRightIcon/></button>
          <button className="btn">Register as Drone Photographer<ArrowRightIcon/></button>
        </Btns>
      </Items>
    </Contents>
  );
};

export default Hire;

const Contents = styled.div`
  background-color: #eeeded9e;
  padding: 3rem 0;
  .title {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #3333339d;
  }
  .hire{
    text-align: center;
    font-size : 1rem;
    line-height: 1.5rem;
    width : 45%;
    margin : 0 auto;
    padding-bottom: 1rem;
    color : #00000090;
    @media(max-width : 991px){
      width : 90%;
    }
  }
`
const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content : center;
  flex-direction: column;
`
const Img = styled.div`
  padding : 2rem 0;
`
const Btns = styled.div`
  display: flex;
  align-items: center;
  gap : 1rem;
  @media(max-width : 412px){
      flex-direction : column-reverse;
    }
  .btn{
    display: flex;
    align-items: center;
    padding : 0.2rem 0.8rem;
    border : 1px solid #00000090;
    border-radius : 50px;
    color : #00000090;
    cursor : pointer;
    :hover{
      border : 1px solid #000000d1;
      color : #000000d1;
    }
  }
`