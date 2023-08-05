import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import FAQ from '../FAQ/FAQ'
import Council from '../Council/Council';
import AboutHome from '../AboutHome/AboutHome';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutHome />
            <Services />
            <FAQ />
            <Council />
        </div>
    );
};

export default Home;