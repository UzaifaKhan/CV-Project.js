import React from 'react';
import './WorkExperience.css';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Softoo',
    year: 'Mar 2022 - Present',
    description:
    "Islamabad, Pakistan",
    iconColor: '#4DB1F9',
  },
  {
    role: 'MERN Stack Developer',
    company: 'Cheetay',
    year: 'Jul 2021 - Feb 2022',
    description:
      'Lahore, Pakistan',
    iconColor: '#E66060',
  },
  {
    role: 'MERN Stack Developer',
    company: 'ArhamSoft (Pvt) Ltd',
    year: 'Sep 2018 - Apr 2019',
    description:
      'Lahore, Pakistan',
    iconColor: '#F7C06D',
  },
  {
    role: 'Web Developer',
    company: 'Sumsols Technology ',
    year: 'Jan 2018 - Jan 2019',
    description:
      'Faisalabad, Pakistan',
    iconColor: '#A663E6',
  },
];

const WorkExperience = () => {
  return (
    <div className="timeline" id='experience'>
          <p style={{fontSize:'10px',letterSpacing:'0.5rem',textAlign:'left'}}>Experience</p>
        <h1 style={{fontSize:'30px',letterSpacing:'0.5rem',textAlign:'left'}}>Work Experience </h1>
      {experiences.map((exp, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-icon" style={{ backgroundColor: exp.iconColor }}></div>
          <div className="timeline-content">
            <h3>{exp.role}</h3>
            <span>{exp.company} {exp.company && '|'} {exp.year}</span>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;