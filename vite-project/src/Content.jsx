import React from 'react';
import { FaLaptopCode, FaGlobe, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import './Content.css';

const Content = () => {
  return (
    <div className="main-page" id='about'>
      <section className="section intro">
        <h2>INTRODUCTION</h2>
        <div className="about-me">
          <h3 style={{textAlign:'left',fontSize:'14px',color:'grey'}}>ABOUT ME</h3>
          <h1 style={{textAlign:'left',fontSize:'28px'}}>Who Am I?</h1>
          <p>
            I'm a Full-stack developer having 5+ years of experience in the IT industry, specializing in
            building interactive and responsive websites. I'm pretty much an expert in HTML, CSS,
            Bootstrap, Javascript, ES6, React, Redux, Node.js, and MongoDB. Further, my other skills
            include problem-solving, effective communication, leadership, and being a team player.
          </p>
        </div>
      </section>

      <section className="services-section" id='services'>
        <div className="service-card" style={{ borderBottomColor: '#007bff' }}>
          <FaLaptopCode className="card-icon" />
          <h3>Web Developer</h3>
        </div>
        <div className="service-card" style={{ borderBottomColor: '#ff5722' }}>
          <FaGlobe className="card-icon1" />
          <h3>Web Design</h3>
        </div>
        <div className="service-card" style={{ borderBottomColor: '#ffc107' }}>
          <FaDatabase className="card-icon2" />
          <h3>Software</h3>
        </div>
        <div className="service-card" style={{ borderBottomColor: 'purple' }}>
          <FaMobileAlt className="card-icon3" />
          <h3>Web Application</h3>
        </div>
      </section>
    </div>
  );
};

export default Content;
