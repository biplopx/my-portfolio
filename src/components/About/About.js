import React from 'react';
import './About.css';
const About = () => {
  return (
    <section className='about-me py'>
      <h2 className='h-txt'>About <span className='text-primary'>Me</span></h2>
      <div className="container">
        <div className="row">
          <div className='about-image'>
            <img src="https://i.ibb.co/kDHR3qz/About-Image.png" alt="biplop" />
          </div>
          <div className='about-content'>
            <p className='lg-text'>Hi, I'm MD <span className="text-primary">Biplop</span> Hossain</p>
            <p>
              I am a pasionate web applications developer from Bogura, Bangladesh. I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also try to focus on writting clean, elegent and efficient code.
            </p>
            <h3>Connect With <span className="text-primary">Me</span></h3>
            <div className="social-media">
              <a href="https://www.linkedin.com/in/biplophossain/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/biplopx" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://facebook.com/biplopx.dev" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;