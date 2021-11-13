import React from 'react';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import ReviewShow from '../ReviewShow/ReviewShow';
import TopBrands from '../TopBrands/TopBrands';

const Home = () => {
    return (
        <div id='home'>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <ReviewShow></ReviewShow>
            <TopBrands></TopBrands>
            <Footer></Footer>
        </div>
    );
};

export default Home;