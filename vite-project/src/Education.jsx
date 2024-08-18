import React, { useState } from 'react';
import './Education.css';

function Education() {
  const [isOpen, setIsOpen] = useState({
    bachelor: false,
    fsc: false,
    matric: false,
  });

  const toggleOpen = (key) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className='Education' id='education'>
      <p style={{ fontSize: '10px', letterSpacing: '0.5rem', textAlign: 'left' }}>EDUCATION</p>
      <h1 style={{ fontSize: '30px', letterSpacing: '0.5rem', textAlign: 'left' }}>EDUCATION</h1>
      <div className="education-section">
        <div className="education-item" onClick={() => toggleOpen('bachelor')}>
          <div className="education-title">BACHELOR DEGREE OF COMPUTER SCIENCE</div>
          {isOpen.bachelor && (
            <div className="education-description">
              <p>2018 | 3.7 CGPA<br />
              Government College University Faisalabad</p>
            </div>
          )}
          <span className={`education-arrow ${isOpen.bachelor ? 'open' : 'close'}`}></span>
        </div>
        <div className="education-item" onClick={() => toggleOpen('fsc')}>
          <div className="education-title">F.sc (Pre-Engineering)</div>
          {isOpen.fsc && (
            <div className="education-description">
              <p>2014 | 74%<br />
              Govt. MC High School Ilama Iqbal Road Faisalabad</p>
            </div>
          )}
          <span className={`education-arrow ${isOpen.fsc ? 'open' : 'close'}`}></span>
        </div>
        <div className="education-item" onClick={() => toggleOpen('matric')}>
          <div className="education-title">Matric</div>
          {isOpen.matric && (
            <div className="education-description">
              <p>2012 | 77%<br />
              Usman Blessing Home High School Afganabad Faisalabad.</p>
            </div>
          )}
          <span className={`education-arrow ${isOpen.matric ? 'open' : 'close'}`}></span>
        </div>
      </div>
    </div>
  );
}

export default Education;
