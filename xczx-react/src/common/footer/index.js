import React from 'react';
import './footer.css';
import Copyright from './copyright';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex">
        <Copyright />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
