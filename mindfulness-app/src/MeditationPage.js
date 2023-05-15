import React from 'react';
// import { Link } from 'react-router-dom'
import VideoPage from './VideoPage';
import { useNavigate, useLocation } from 'react-router-dom';
import './MeditationPage.css'

// import './App.css';
// const videos = [
//   'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
//   'https://www.youtube.com/watch?v=jPpUNAFHgxM',
//   'https://www.youtube.com/watch?v=HT_ZvCtYNSk'
// ];

function MeditationPage(props) {
  const location = useLocation();
  const { videoUrl, description, benefits, onComplete } = location.state;

  const navigate = useNavigate();

  const handleMeditateClick = () => {
    // navigate('/video');
    navigate('/video', { state: { videoUrl: videoUrl } });
    // alert('Survey completed!');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };
  


  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src="mlogo.png" alt="Your Logo" />
        </div>
        <div className="nav-links">
          <a href="#" onClick={handleHomeClick}>Home</a>
          <a href="#" onClick={handleAboutClick}>About Us</a>
        </div>
      </header>
      {/* <div className="background-image-med"></div> */}
      
    <div className="meditation-page">
    <img src="meditation.jpg" alt="Welcome" className="landing-background-image" />     
      <h2 className="title">Recommended Meditation</h2>
      <div className="video-container">
        <div className="video-wrapper">
          {/* <iframe
            className="video"
            src={videoUrl}
            title="Meditation Video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> */}
          <video
            className="video"
            src={videoUrl}
            onClick={handleMeditateClick}
            // autoPlay
          />
        </div>
        <div className="video-info">
          <p className="description">Description: {description}
          </p>
          <p className="benefits">Benefits: {benefits}
          </p>
        </div>
      </div>
      <div className="button-container">
        {/* <Link to="/video"> */}
          <button className="meditate-button" 
           onClick={handleMeditateClick}
          >Meditate</button>
        {/* </Link> */}
      </div>
    </div>
    </div>
  );
}


export default MeditationPage;


// import React from 'react';
// import { useHistory } from 'react-router-dom';

// function MeditationPage({ videoUrl }) {
//   const history = useHistory();

//   const handleMeditateClick = () => {
//     history.push('/video');
//   };

//   return (
//     <div className="meditation-page">
//       <div className="recommended-meditation">
//         <h2 className="recommended-title">Recommended Meditation</h2>
//         <div className="video-container">
//           <iframe title="meditation-video" className="video-player" src={videoUrl} />
//         </div>
//         <div className="description-container">
//           <h3 className="description-title">Video Description:</h3>
//           <p className="description-text">
//             This video guides you through a relaxing meditation practice that can help
//             reduce stress and anxiety, improve focus, and promote better sleep.
//           </p>
//           <h3 className="benefits-title">Benefits:</h3>
//           <ul className="benefits-list">
//             <li>Reduces stress and anxiety</li>
//             <li>Improves focus and concentration</li>
//             <li>Promotes better sleep</li>
//           </ul>
//         </div>
//       </div>
//       <div className="button-container">
//         <button className="meditate-button" onClick={handleMeditateClick}>Meditate</button>
//       </div>
//     </div>
//   );
// }

// export default MeditationPage;
