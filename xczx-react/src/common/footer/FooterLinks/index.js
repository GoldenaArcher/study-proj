import React from 'react';
import FOOTER_LINKS from '../../../constants/footerLinks';
import FooterLink from './FooterLink';

const FooterLinks = () => {
  const footerLinkArray = [];
  for (const link in FOOTER_LINKS) {
    footerLinkArray.push(<FooterLink subLinks={FOOTER_LINKS[link]} key={link} />);
  }
  return (
    <div className="footer-links flex">
      {footerLinkArray}
    </div>
  );
};

export default FooterLinks;
