import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './VideoPage.css';

function VideoPage() {
  const location = useLocation();
  const { videoUrl } = location.state;
//   const videoRef = useRef(null);
  const navigate = useNavigate();

	// const [videoEnded, setVideoEnded] = useState(false);

  // const handleVideoEnded = () => {
  //   // videoRef.current.controls = true;
	// 	setVideoEnded(true);
  // };

  const handleCompleteClick = () => {
  
    const nextPage = '/final';
  
    navigate('/survey', { state: {nextPage : nextPage, videoUrl: videoUrl} });
    // navigate('/postquestions', { state: { nextPage: nextPage, videoUrl: videoUrl } });
  };
  

  return (
    <div className="video-page-container">
      <video
        // ref={videoRef}
        className="video-page-player"
        src={videoUrl}
        // onEnded={handleVideoEnded}
        autoPlay
				// style={{ width: '100vw', height: '100vh' }}
      />
			{/* {!videoEnded && (
        <div className="video-overlay">
          <h2 className="video-title">Video Title</h2>
        </div>
      )} */}
			{/* {videoEnded && ( */}
      <div className="video-page-button-container">
        <button className="video-page-complete-button" onClick={handleCompleteClick}>Complete Survey</button>
      </div>
			{/* )} */}
    </div>
  );
}

export default VideoPage;
