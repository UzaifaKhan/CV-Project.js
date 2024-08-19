import React, { useEffect, useRef } from 'react';
import './Expertise.css';
import { FaBootstrap, FaJs, FaReact, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiJson, SiMongoose, SiRedux } from 'react-icons/si';

const skills = [
  { icon: FaBootstrap, name: "Bootstrap", color: 'blue' },
  { icon: SiExpress, name: "Express", color: 'red' },
  { icon: FaJs, name: "JavaScript", color: 'black' },
  { icon: SiMongodb, name: "MongoDB", color: 'purple' },
  { icon: FaReact, name: "React JS", color: 'green' },
  { icon: FaCss3Alt, name: "CSS 3", color: 'blue' },
  { icon: FaGithub, name: "GitHub", color: 'red' },
  { icon: SiJson, name: "JSON", color: 'black' },
  { icon: SiMongoose, name: "Mongoose", color: 'purple' },
  { icon: SiRedux, name: "Redux", color: 'green' },
];

const progressData = [
  { label: 'Web', percentage: '90%', color: 'dodgerblue' },
  { label: 'HTML5', percentage: '85%', color: 'gold' },
  { label: 'WordPress', percentage: '70%', color: 'mediumseagreen' },
  { label: 'jQuery', percentage: '60%', color: 'tomato' },
  { label: 'CSS3', percentage: '90%', color: 'mediumorchid' },
  { label: 'SEO', percentage: '80%', color: 'darkslateblue' },
];

const Expertise = () => {
  const progressBarRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'none';
            void entry.target.offsetWidth;
            entry.target.style.animation = '';
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    progressBarRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      progressBarRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="expertise-container" id='skills'>
      <h1 className='skills'>EXPERTISE</h1>
      <h3 className='heading'>HERE ARE SOME OF MY <br /> EXPERTISE</h3>

      <div className="expertise-items">
        {skills.slice(0, 5).map((skill, index) => (
          <div key={index} className="expertise-card" style={{ borderBottomColor: skill.color }}>
            <skill.icon size={24} style={{ color: skill.color }} />
            <h4>✔ {skill.name}</h4>
          </div>
        ))}
      </div>

      <div className="expertise-items">
        {skills.slice(5).map((skill, index) => (
          <div key={index} className="expertise-card" style={{ borderBottomColor: skill.color }}>
            <skill.icon size={24} style={{ color: skill.color }} />
            <h4>✔ {skill.name}</h4>
          </div>
        ))}
      </div>

      <h1 className='Skills'>Progress</h1>
      <div className="progress-container">
        {progressData.map((item, index) => (
          <div key={index} className="progress-bar">
            <div
              ref={(el) => (progressBarRefs.current[index] = el)}
              className="bar"
              style={{
                '--progress-width': item.percentage,
                backgroundColor: item.color,
              }}
            ></div>
            <div className="text">{item.label} <span style={{ color: item.color }}>{item.percentage}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
