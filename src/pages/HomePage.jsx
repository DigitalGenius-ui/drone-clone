import React from 'react';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Hire from '../components/Hire/Hire';
import Learning from '../components/Learning/Learning';
import Products from '../components/Products/Products';
import Interview from '../components/Interview/Interview';
import Subscribe from '../components/Subscribe/Subscribe';
import Category from '../components/category/Category';

const HomePage = ({search}) => {
  return (
    <div>
        <Banner />
        <Products search={search}/>
        <Category/>
        <Learning/>
        <Hire/>
        <Interview/>
        <Subscribe />
        <Footer/>
    </div>
  )
}

export default HomePage