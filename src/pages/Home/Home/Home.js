import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import FAQ from '../FAQ/FAQ';
import Council from '../Council/Council';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <FAQ />
            <Council />
        </div>
    );
};

export default Home;