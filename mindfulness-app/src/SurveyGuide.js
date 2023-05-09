import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './AboutUs.css'

function AboutUs() {
  const navigate = useNavigate();

  const location = useLocation();
  const { videoUrl, description, benefits, onComplete } = location.state;

  const handleMeditateClick = () => {
    // navigate('/video');
    const nextPage = '/final';
    navigate('/postquestions', { state: {nextPage : nextPage, videoUrl: videoUrl} });
    // alert('Survey completed!');
  };

  const handleRegenerateRecommendation = () => {
    const nextPage = '/meditation';
  
    navigate('/questions', { state: nextPage  });
  };

  const handleRepeatMeditation = () => {
    // Handle repeat meditation button click
    // ...
    navigate('/meditation');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <div className="about-us-page">
      <header className="header">
        <div className="logo-container">
          <img src="your-logo.png" alt="Your Logo" />
        </div>
        <div className="nav-links">
          <a href="#" onClick={handleHomeClick}>Home</a>
          <a href="#" onClick={handleAboutClick}>About Us</a>
        </div>
      </header>
      <div className="guide-background-image"></div>
      {/* <div className="message-container">
        <h1>Thank you for your participation and interest in Mindfulness!</h1>
        <p> We are a group of Researchers coming together to provide you with personalized meditation and help increase awareness and motivation around mindfulness.
        </p>
        <h2>Meet The Team</h2>
        <h3>Dr Wang</h3>
        <h3>Dr Grindlewald</h3>
        <div className="button-container">
          <button className="regenerate-button" onClick={handleRegenerateRecommendation}>Regenerate Recommendation</button>
          <button className="repeat-button" onClick={handleRepeatMeditation}>Repeat Meditation</button>
        </div>
  </div> */}
    <div className="about-us-message-container">
      <section className="guide-section">
        <div className="about-us-heading">
          <h1>IRB Study #IRB202200973</h1>
        </div>
        <div className="about-us-message">
          <h1>In this study, you will be asked to complete a questionnaire after watching the nature video.</h1>
          <h1>We encourage you to answer these questions as honestly and thoughtfully as possible, as your responses will be an important contribution to our research.</h1>
        </div>
        <div className="about-us-team">
          {/* Team photos and information */}
        </div>
        {/* <div className="about-us-contact">
          <h2>For any queries contact <a href="mailto:kumar.j@ufl.edu">Jayavidhi Kumar (kumar.j@ufl.edu)</a></h2>
        </div>
        <div className="about-us-meditating">
          <h3>Keep Meditating.</h3>
        </div> */}
        <div className="button-container">
        {/* <Link to="/video"> */}
          <button className="meditate-button" 
           onClick={handleMeditateClick}
          >Continue</button>
        {/* </Link> */}
      </div>
      </section>

    </div>
    </div>
  );
}

export default AboutUs;
