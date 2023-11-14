import React from 'react';
import MeditationBanner from './MeditationBanner/MeditationBanner';
import MeditationReach from './MeditationReach/MeditationReach';
import Council from '../Home/Council/Council';

const Meditation = () => {
    return (
        <div>
            <div>
                <MeditationBanner/>
                <MeditationReach/>
                <Council/>
            </div>
        </div>
    );
};

export default Meditation;