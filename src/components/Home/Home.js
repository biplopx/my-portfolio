import React from 'react';
import About from '../About/About';
import HeroBanner from '../HeroBanner/HeroBanner';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <About />
      <Skills></Skills>
    </>
  );
};

export default Home;