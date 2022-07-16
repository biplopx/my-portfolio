import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className='hero-banner py'>
      <div className="container">
        <div className="row">
          <div className="hero-content">
            <p className='lg-text'>Hello I'm</p>
            <h2 className='text-primary'>MD Biplop Hossain</h2>
            <p className='lg-text'>Frontend Web Developer</p>
            <p className='hero-p'>I am a pasionate web applications developer from Bogura, Bangladesh. I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also try to focus on writting clean, elegent and efficient code.</p>
            <button className='btn-primary'>Download Resume</button>
          </div>
          <div className="hero-image">
            <img src="https://i.ibb.co/DVNTMPm/Hero-Image.png" alt="MD Biplop Hossain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;