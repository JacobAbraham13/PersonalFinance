import React from 'react';
import './HeroPage.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const HeroPage = () => {

  //const navigate = useNavigate();

  const redirectToOtherPage = () => {
    //navigate('/home'); 
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
      <h1>CONNECTING<span className="big-word"> ANGEL INVESTORS</span></h1>
      <h1>WITH <span className="big-word"> MINORITY </span> OWNED BUSINESSES</h1>
        <button onClick={redirectToOtherPage}>GET MATCHED</button>
      </div>
    </div>
  );
}

export default HeroPage;
