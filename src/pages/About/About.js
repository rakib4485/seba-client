import React from 'react';
import AboutCards from './AboutCards/AboutCards';
import WelcomeText from './WelcomeText/WelcomeText';
import Details from './Details/Details';

const About = () => {
    return (
        <div className='my-20'>
            <AboutCards/>
            <WelcomeText/>
            <Details/>
        </div>
    );
};

export default About;