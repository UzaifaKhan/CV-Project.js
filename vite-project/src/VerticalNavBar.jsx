import React from 'react';
import './VerticalNavbar.css';
import img from './assets/img.png';

const VerticalNavbar = () => {
  return (
    <nav className="vertical-navbar">
      <div className='bio'>
        <img className='img' src={img} alt="Profile" id='home'/>
        <h3>MUHAMMAD USMAN <br /> GHANI</h3>
        <h4 style={{color:'white'}}>Senior Software Engineer</h4>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <footer className='footer'>
        <p>© Copyright 2024 All rights reserved. <br />Made with  by Uzaifa Khan <br />
        </p>
      </footer>
    </nav>
  );
};

export default VerticalNavbar;
