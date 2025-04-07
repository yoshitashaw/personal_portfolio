import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Yoshita Shaw</h1>
        <h5 className="text-light">Full-Stack Web Developer</h5>
        
        {/* Download CV button */}
        <CTA />

        {/* Social media links */}
        <HeaderSocials />
        
        {/* Scroll down link */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
