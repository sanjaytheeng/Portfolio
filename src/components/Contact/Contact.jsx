import React from 'react';
import './contact.css'
import theme_pattern from '../../assets/react.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e032774c-f15d-4119-b372-cde0d87907e5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
      setResult(data.message);
    }
  };
  console.log(result);

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'd love to hear from you! Whether you have a project in mind, a question, or just want to connect, feel free to reach out. Let's create something amazing together!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faMailBulk} /> <p>sanjaytheeng007@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faPhone} /> <p>+977-9823789124</p>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faLocation} /> <p>Kathmandu, Nepal</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Your Message</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='submit'>Submit Now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;