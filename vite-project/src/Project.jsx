import React from "react";
import "./Project.css";
import img from './assets/cheetay.jpg';
import img1 from './assets/mesh.jpg';
import img2 from './assets/flo.jpg';
import img3 from './assets/thunder.jpg';
import img4 from './assets/corex.jpg';

const Project = () => {
  return (
    <div className="recent-work-container" id="work">
      <h2 style={{ fontSize: '10px', letterSpacing: '0.5rem', textAlign: 'left' }}>My Work</h2>
      <h3 style={{ fontSize: '30px', letterSpacing: '0.5rem', textAlign: 'left' }}>Recent Work</h3>
      <nav className="work-categories">
        <a href="#Cheetay">Cheetay</a>
        <a href="#Mesh">Mesh</a>
        <a href="#Flo">Flo Panda</a>
        <a href="#Thunder">Thunder</a>
        <a href="#Corex">Corex</a>
      </nav>
      <div className="work-grid">
        <div className="project-item">
          <img id="Cheetay" src={img} alt="Cheetay" />
          <div className="overlay">
            <a href="https://cheetaypop.pk/" target="_blank" rel="noopener noreferrer">Cheetay</a>
            <p>React, Node, Firebase</p>
          </div>
        </div>
        <div className="project-item">
          <img id="Mesh" src={img1} alt="Mesh" />
          <div className="overlay">
            <a href="https://www.mesh-online.com/" target="_blank" rel="noopener noreferrer">Mesh</a>
            <p>React js, Redux, Node js, Express js, MongoDB</p>
          </div>
        </div>
        <div className="project-item">
          <img id="Flo" src={img2} alt="Flo Panda" />
          <div className="overlay">
            <a href="https://www.flopanda.com/" target="_blank" rel="noopener noreferrer">Flo Panda</a>
            <p>React, Redux, Node, MongoDB</p>
          </div>
        </div>
        <div className="project-item">
          <img id="Thunder" src={img3} alt="Thunder" />
          <div className="overlay">
            <a href="http://thundertest.softoo.co/" target="_blank" rel="noopener noreferrer">Thunder</a>
            <p>React, Redux, Antd, Node.js, Echart</p>
          </div>
        </div>
        <div className="project-item">
          <img id="Corex" src={img4} alt="Corex" />
          <div className="overlay">
            <a href="https://www.gorex-frontend.softoo-dev.com/" target="_blank" rel="noopener noreferrer">Corex</a>
            <p>HTML, CSS, JavaScript, React js, Redux, Node js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;