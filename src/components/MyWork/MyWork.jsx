import React from 'react';
import './MyWork.css'
import theme_pattern from '../../assets/react.svg'
import mywork_data from '../../assets/mywork'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                    {mywork_data.map((work,index) => {
                        return <img key={index} src={work.w_img} ></img>
                    })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </div>
    );
};

export default MyWork;