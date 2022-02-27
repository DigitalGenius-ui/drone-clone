import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import SingleInterview from './SingleInterview';
import { kids } from "../../Data/InterviewItems";
import { ArrowRight } from "@material-ui/icons";

const Learning = () => {
  const [visible, setVisible] = useState(3);
  const addMore = () => {
    setVisible(prev => prev + 3);
  }
  return (
    <Contents>
      <Typography className="title" variant="h4">
        interview-Ask a Drone Expert
      </Typography>
      <Items>
        {kids.slice(0, visible).map((item) => (<SingleInterview item={item} key={item.id}/>))}
      </Items>
      <Btn>
        <Button 
        onClick={addMore}
        variant="contained"
        color="default"
        className="btn"
        endIcon={<ArrowRight />}>Show All</Button>
      </Btn>
    </Contents>
  );
};

export default Learning;

const Contents = styled.div`
    padding : 2rem 0;
  .title {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #3333339d;
    padding-bottom : 2rem;
  }
`
const Items = styled.div`
  display : grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap : 1rem;
  width : 85%;
  margin : 0 auto;
`
const Btn = styled.div`
  padding-top : 1rem;
  display : flex;
  align-items : center;
  justify-content: center;
  .btn{
    display : flex;
    align-items : center;
    border-radius: 50px;
    border : 1px solid #3333339d;
    color : #3333339d;
    font-size: 0.7rem;
    :hover{
      border : 1px solid #000;
      color : #000;
    }
  }
`
