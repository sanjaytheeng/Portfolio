import React from 'react';
import './Footer.css'
import footer_logo from '../../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='footer'> 
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>As a passionate BCA student, I'm always excited to collaborate on projects, share knowledge, or discuss tech-related topics. If you have any questions or opportunities, feel free to reach out to me through the form below!</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <FontAwesomeIcon icon={faUser} />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>&#169; 2024 Sanjay Tamang. All Rights Reserved. </p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;