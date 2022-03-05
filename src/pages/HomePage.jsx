import React from 'react';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Hire from '../components/Hire/Hire';
import Learning from '../components/Learning/Learning';
import Products from '../components/Products/Products';
import Interview from '../components/Interview/Interview';
import Subscribe from '../components/Subscribe/Subscribe';
import Category from '../components/category/Category';
import Container from '../components/auth/Container';
import styled from 'styled-components';
import DropMenu from '../components/dropDown/DropMenu';
import { DroneState } from '../context/Context';

const HomePage = () => {
  const { moveAuth, toggle } = DroneState();
  return (
    <Wrapper moveAuth={moveAuth} toggle={toggle}>
        <Banner/>
        <Products/>
        <Category/>
        <Learning/>
        <Hire/>
        <Interview/>
        <Subscribe />
        <Footer/>
        <div className='auth'>
          <Container/>
        </div>
        <div className="drop">
          <DropMenu />
        </div>
    </Wrapper>
  )
}

export default HomePage;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  .auth{
    position: absolute;
    top: 0;
    right: ${props => props.moveAuth ? "0" : "-15rem"};
    transition: all 500ms ease-in-out;
  }
  .drop{
    position: absolute;
    top: 0;
    left: ${props => props.toggle ? 0 : "-15rem"};
    transition: all 500ms ease-in-out;
  }
`