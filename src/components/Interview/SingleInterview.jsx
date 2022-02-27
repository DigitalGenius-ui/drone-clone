import React from "react";
import styled from "styled-components";

const Learning = ({item}) => {
    const { img, title, author, date, color } = item;
  return (
    <Item img={img}>
        <Text color={color}>
            <h4>{title}</h4>
            <h6>{author}</h6>
            <p>{date}</p>
        </Text>
    </Item>
  );
};

export default Learning;

const Item = styled.div`
    width : 100%;
    height: 15rem;
    background: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display : flex;
    align-items: flex-end;
`
const Text = styled.div`    
    color : white;
    background-color: ${props => props.color};
    padding : 0.5rem;
    width : 100%;
    h4{
        font-weight: 500;
        font-size : 0.9rem;
        line-height: 1.3rem;
    }
    h6{
        font-weight: 300;
        font-size : 0.8rem;
        padding-bottom: 0.2rem;
    }
    p{
        font-size : 0.7rem;
    }
`