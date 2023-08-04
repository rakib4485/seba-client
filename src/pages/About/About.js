import React from 'react';
import AboutCards from './AboutCards/AboutCards';
import WelcomeText from './WelcomeText/WelcomeText';
import Details from './Details/Details';
import AboutBanner from './AboutBanner/AboutBanner';

const About = () => {
    return (
        <div className=''>
            <AboutBanner/>
            <AboutCards/>
            <WelcomeText/>
            <Details/>
        </div>
    );
};

export default About;