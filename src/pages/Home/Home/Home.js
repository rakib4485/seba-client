import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import FAQ from '../FAQ/FAQ'
import Council from '../Council/Council';
import AboutHome from '../AboutHome/AboutHome';
import HomePricing from '../HomePricing/HomePricing';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutHome />
            <Services />
            <Council />
            
            <HomePricing />
            <FAQ />
        </div>
    );
};

export default Home;