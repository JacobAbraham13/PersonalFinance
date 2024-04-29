import React from 'react';
import './LenderProfile.css';

function LenderProfile() {
  return (
    <section className="lender-profile">
      <div className="lender-info">
        <div className="logo-name-wrapper">
          <div className="lender-logo"></div>
          <div className="lender-name-wrapper">
            <h1 className="lender-name">Lender Name <button className="connect-button">Connect</button></h1>
          </div>
        </div>
        <p className="location">Austin, TX</p>
        <p className="mission-statement">Mission Statement or Description: Lorem ipsum dolor sit amet consectetur...</p>
        <p className="contact-info">lendername@abc.org | (123) 456-7890</p>
        <p className="sectors">Sectors: Lorem Ipsum</p>
        <p className="location-detail">Location: Austin, TX</p>
      </div>
    </section>
  );
}

export default LenderProfile;