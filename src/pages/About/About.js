import React from 'react';
import AboutCards from './AboutCards/AboutCards';
import WelcomeText from './WelcomeText/WelcomeText';
import AboutBanner from './AboutBanner/AboutBanner';
import AboutHome from '../Home/AboutHome/AboutHome';

const About = () => {
    return (
        <div className=''>
            <AboutBanner/>
            <AboutCards/>
            <WelcomeText/>
            <AboutHome/>
        </div>
    );
};

export default About;