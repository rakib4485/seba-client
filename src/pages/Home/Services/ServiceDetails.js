import React from 'react';
import ServiceDetailsBanner from './ServiceDetailsBanner';
import ServiceDetailsOthers from './ServiceDetailsOthers';

const ServiceDetails = () => {
    return (
        <div>
            <ServiceDetailsBanner/>
            <ServiceDetailsOthers/>
        </div>
    );
};

export default ServiceDetails;