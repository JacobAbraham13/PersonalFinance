import React from 'react';
import './HeroPage.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const HeroPage = () => {

  const navigate = useNavigate();

  const redirectToOtherPage = () => {
    navigate('/home'); 
  };

  return (
    <div className="hero-container">
      <div className="color-overlay"></div>
      <div className="hero-content ">
      <h1>CONNECTING<span className="big-word"> SMALL BUSINESSES</span></h1>
      <h1>TO THE BEST <span className="big-word"> MICROFINANCE </span> LENDERS</h1>
        <button onClick={redirectToOtherPage}>GET MATCHED</button>
      </div>
    </div>
  );
}

export default HeroPage;
