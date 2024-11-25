import React from 'react';
import './Services.css'
import theme_pattern from '../../assets/react.svg'
import services_data from '../../assets/services_data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id='service' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                { services_data.map((service,index) => {
                    return <div key={index} className='services-format'>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <i className={service.icon}></i>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                }) }
            </div>
            
        </div>
    );
};

export default Services;