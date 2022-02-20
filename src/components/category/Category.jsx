import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { ArrowRight } from '@material-ui/icons';


const Category = () => {
  return (
      <Contents>
          <Typography className="title" variant="h4">Popular Category</Typography>
          <Items>
            <Content>
                <img src="https://digitalgenius-ui.github.io/drone/images/imag1.png" alt="signs" />
                <div>
                    MultiCopters
                    <ArrowRight/>
                </div>
            </Content>
            <Content>
                <img src="https://digitalgenius-ui.github.io/drone/images/imag2.png" alt="signs" />
                <div>AirPlanes<ArrowRight/></div>
            </Content>
            <Content>
                <img src="https://digitalgenius-ui.github.io/drone/images/image3.png" alt="signs" />
                <div>Other Dronss<ArrowRight/></div>
            </Content>
            <Content>
                <img src="https://digitalgenius-ui.github.io/drone/images/imag4.png" alt="signs" />
                <div>Flight Electronics<ArrowRight/></div>
            </Content>
            <Content>
                <img 
                style={{width : "3.8rem"}}
                src="https://site-1278683.mozfiles.com/files/1278683/klipartz_com__58_.png?1621812085" alt="signs" />
                <div style={{marginTop : "0.2rem"}}>View All<ArrowRight/></div>
            </Content>
          </Items>
      </Contents>
  )
}

export default Category;

const Contents = styled.div`
    background-color : #eeeded9e;
    margin: 3rem 0;
    padding : 4rem 0;
    .title{
        text-align: center;
        font-size : 1.2rem;
        font-weight: 600;
        color : #3333339d;
    }
` 
const Content = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items: center;
    div{
        display : flex;
        align-items: center;
        padding: 0.7rem 0;
        font-size : 1rem;
        color : #3333339d;
        font-weight: 500;
    }
` 
const Items = styled.div`
    width : 85%;
    margin: 0 auto;
    margin-top : 5rem;
    display : grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
` 