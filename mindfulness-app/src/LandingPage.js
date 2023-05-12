import React from 'react';
import { useNavigate } from 'react-router-dom';

import './LandingPage.css';

function LandingPage(props) {

  const navigate = useNavigate();

  // static site code

  // const videos = [
  //   // 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  //   // 'https://www.youtube.com/watch?v=I5A66Q0jWvg',
  //   // 'https://www.youtube.com/watch?v=uUkLlH9Vcqk',
  //   // 'https://www.w3schools.com/html/mov_bbb.mp4',
  //   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  //   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  //   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  //   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  //   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
  //   ];

  // const randomIndex = Math.floor(Math.random() * videos.length);
  // console.log("randome index::", randomIndex);
  // const selectedVideo = videos[randomIndex];

  // const handleStartClick = () => {
  //   navigate('/meditation', { state: { videoUrl: selectedVideo, description: "nature sound", benefits:"relax" } });
  // };

  const handleStartClick = () => {
 
    const nextPage = '/meditation';
  
    navigate('/questions', { state: nextPage  });
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };
  

  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo-container">
          <img src="your-logo.png" alt="Your Logo" />
        </div>
        <div className="nav-links">
          <a href="#" onClick={handleHomeClick}>Home</a>
          <a href="#" onClick={handleAboutClick}>About Us</a>
        </div>
      </header>
      <div className="welcome-container">
        <img src="mindfulness_welcome.jpg" alt="Welcome" className="landing-background-image" />
        <div className="welcome-message">
          <h1>Practice Mindfulness with nature interactions</h1>
          <p>Complete a few questions for a personalized mindfulness experience.</p>
          <button className="get-started-button" onClick={handleStartClick}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
