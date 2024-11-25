import React from 'react';
import './About.css';
import theme_pattern from '../../assets/react.svg'
import profile_img from '../../assets/2.png'

const About = () =>  {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Welcome to my portfolio! I am a passionate BCA (Bachelor of Computer Applications) student with a keen interest in technology and software development. Throughout my academic journey, I have gained a strong foundation in programming languages, web development, and data structures, constantly striving to enhance my skills and knowledge.</p> 
                        <p>This portfolio showcases some of my projects, assignments, and experiences, highlighting my dedication to learning and growing in the tech field. I am excited to explore new opportunities and challenges that will allow me to apply my skills and contribute to innovative solutions.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Django</p> <hr style={{ width: "30%" }} /> 
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p> <hr style={{ width: "20%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React</p> <hr style={{ width: "10%" }} /> 
                        </div>
                        <div className="about-skill">
                            <p>Bootstrap</p> <hr style={{ width: "50%" }} /> 
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEAR OF EXPERIENCES</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    );
};


export default About;