import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MyResume from '../Resume/Resume';

const Navbar = () => {

    const [menu,setMenu] = useState("home");

    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <ul className="nav-menu">
                <li className="nav-item"><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<FontAwesomeIcon icon={faMinus} />:<></>}</li>
                <li className="nav-item"><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About</p></AnchorLink>{menu==="about"?<FontAwesomeIcon icon={faMinus} />:<></>}</li>
                {/* <li className="nav-item"><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={() => setMenu("service")}>Services</p></AnchorLink>{menu==="service"?<FontAwesomeIcon icon={faMinus} />:<></>}</li> */}
                <li className="nav-item"><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>My Works</p></AnchorLink>{menu==="work"?<FontAwesomeIcon icon={faMinus} />:<></>}</li>
                <li className="nav-item"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact Me</p></AnchorLink>{menu==="contact"?<FontAwesomeIcon icon={faMinus} />:<></>}</li>
            </ul>
            <MyResume />
      
        </div>
    );
};

export default Navbar;