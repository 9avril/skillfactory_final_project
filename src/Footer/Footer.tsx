import React from 'react';
import './Footer.css';
import scan_footer_log from '../assets/scan_footer_log.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img src={scan_footer_log} alt="Footer logo" className="footer-logo"/>
      <div className="footer-info">
      <div className="contact-info">
        <p>г. Москва, Цветной б-р, 40</p>
        <p>+7 495 771 21 11</p>
        <p>info@skan.ru</p>
    </div>

        <div className="copyright">
          <span>Copyright. 2022</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
