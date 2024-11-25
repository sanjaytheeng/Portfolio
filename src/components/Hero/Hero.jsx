import React from 'react';
import './Hero.css'
import profile_img from '../../assets/1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Sanjay Tamang,</span>fullstack developer based in Nepal</h1>
            <p>I am a BCA student who is interested in fullstack development currently in 7th sem.</p>
           <br />
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            </div>
            
        </div>
    );
}

export default Hero;