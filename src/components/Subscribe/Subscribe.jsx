import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Hire = () => {
  return (
    <Contents>
      <Typography className="title" variant="h4">
        Subscribe A Newsletter
      </Typography>
      <Form>
        <input type="text" placeholder="Your Email Address" />
        <button>
          <ArrowRightIcon />
        </button>
      </Form>
    </Contents>
  );
};

export default Hire;

const Contents = styled.div`
  background-color: #eeeded9e;
  padding: 4rem 0;
  display: flex;
  align-items : center;
  justify-content: center;
  flex-direction : column;
  .title {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #3333339d;
  }
`
const Form = styled.div`
  width : 20rem;
  display: flex;
  align-items : center;
  border-radius: 50px;
  margin-top : 1rem;
  input{
    flex : 1;
    padding : 0.4rem 0.8rem;
    border : 1px solid #3333339d;
    outline : none;
    background-color: transparent;
    border-radius: 50px 0 0 50px;
  }
  button{
    padding : 0.8px 0.5rem;
    background-color: #bdbdbd;
    border-radius: 0 50px 50px 0;
    border : 1px solid #3333339d;
    border-left: none;
    cursor : pointer;
    :hover{
      background-color: #7c7c7c;
    }
  }
`