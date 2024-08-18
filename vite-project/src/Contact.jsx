import React, { useRef } from 'react';
import './Contact.css';
import { FaGlobe, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com'; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_e3ojpai',  
      'template_cbnhcy8', 
      form.current,
      'ECSqewqBlCqLPfoF-'     
    ).then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again later.');
      });
  };

  return (
    <div className="contact-container" id='contact'>
      <div className="contact-info">
        <h4 style={{ fontSize: '10px', letterSpacing: '0.5rem', textAlign: 'left' }}>GET IN TOUCH</h4>
        <h2 style={{ fontSize: '30px', letterSpacing: '0.5rem', textAlign: 'left' }}>CONTACT</h2>

        <div className="info-block1">
          <div className="icon-wrapper">
            <FaGlobe className="icon" /> 
          </div>
          <a href="mailto:mr.ghanidev17@gmail.com" className="info-text">
            mr.ghanidev17@gmail.com
          </a>
        </div>

        <div className="info-block">
          <div className="icon-wrapper">
            <FaMapMarkerAlt className="icon" /> 
          </div>
          <p className="info-text">
            Liaqatabad # 1 street # 5 house # 303 <br />
            Faisalabad, Pakistan
          </p>
        </div>

        <div className="info-block">
          <div className="icon-wrapper">
            <FaPhone className="icon" /> 
          </div>
          <a href="tel:+923206404567" className="info-text">
            +923206404567
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" className="input" required />
          <input type="email" name="email" placeholder="Email" className="input" required />
          <input type="text" name="subject" placeholder="Subject" className="input" required />
          <textarea name="message" placeholder="Message" className="textarea" required></textarea>
          <button type="submit" className="button">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;