import React, { useEffect, useRef } from 'react';
import './StatsSection.css';

const stats = [
  { number: 15, label: "CUPS OF COFFEE" },
  { number: 10, label: "PROJECTS" },
  { number: 5, label: "PARTNERS" },
];

const StatsSection= () => {
  const statsContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const counters = document.querySelectorAll('.number');
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let count = 1; 
          const increment = Math.ceil(target / 100); 
          const speed = 500; 

          const updateCounter = () => {
            if (count < target) {
              counter.innerText = count;
              count += increment;
              setTimeout(updateCounter, speed); 
            } else {
              counter.innerText = target;
            }
          };

          updateCounter();
        });
      }
    });

    observer.observe(statsContainerRef.current);

    return () => {
      if (observer && statsContainerRef.current) {
        observer.unobserve(statsContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="stats-container" ref={statsContainerRef}>
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <h2 className="number" data-target={stat.number}>1</h2>
          <p className="label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
