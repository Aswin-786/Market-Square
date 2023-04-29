import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading popular">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list popular">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading about">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About Market Square</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Market Square People</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading details ">
            <p>Market Square</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className='popular'>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2023 Market Square</p>
      </div>
    </div>
  );
}

export default Footer;
