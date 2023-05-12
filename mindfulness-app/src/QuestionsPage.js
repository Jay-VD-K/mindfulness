// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './QuestionsPage.css'

// function QuestionsPage(props) {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

//   const location = useLocation();
// //   const questions = location.state.questions;
//   const nextPage = location.state;
//   console.log("next-page::", nextPage);

//   const { questions, onAnswerSelected, onBackClick, onComplete } = props;
//   const currentQuestion = questions[currentQuestionIndex];

//   const navigate = useNavigate();

//   const handleAnswerSelected = (index) => {
//     setSelectedAnswerIndex(index);
//   };

//   const handleContinueClick = () => {
//     if (selectedAnswerIndex !== null) {
//       onAnswerSelected(currentQuestionIndex, selectedAnswerIndex);
//       setSelectedAnswerIndex(null);
//       if (currentQuestionIndex === questions.length - 1) {
//         navigate(nextPage);
//       } else {
//         setCurrentQuestionIndex(currentQuestionIndex + 1);
//       }
//     }
//   };
  

//   const handleBackClick = () => {
//     if (currentQuestionIndex > 0) {
//       onBackClick(currentQuestionIndex);
//       setSelectedAnswerIndex(null);
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//     else{
//       navigate(-1);
//     }
//   };

//   return (
//     <div className="questions-page">
//       <div className="question-container">
//         <h2 className="question-title">{currentQuestion.question}</h2>
//         <div className="answer-options">
//           {currentQuestion.answers.map((answer, index) => (
//             <div
//               key={index}
//               className={`answer-option${selectedAnswerIndex === index ? ' selected' : ''}`}
//               onClick={() => handleAnswerSelected(index)}
//             >
//               {/* <span className="answer-index">{String.fromCharCode(index + 65)}</span> */}
//               <span className="answer-text">{answer}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="button-container">
//         <button className="back-button" onClick={handleBackClick}>Back</button>
//         <button className="continue-button" onClick={handleContinueClick}>Continue</button>
//       </div>
//     </div>
//   );
// }

// export default QuestionsPage;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './QuestionsPage.css';

function QuestionsPage() {
  const location = useLocation();
  const {nextPage} = location.state;
  const navigate = useNavigate();

  // const handleContinueClick = () => {
    //     if (selectedAnswerIndex !== null) {
    //       onAnswerSelected(currentQuestionIndex, selectedAnswerIndex);
    //       setSelectedAnswerIndex(null);
    //       if (currentQuestionIndex === questions.length - 1) {
            // navigate(nextPage);
              // navigate('/meditation', { state: { videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', description: "nature sound", benefits:"relax" } });
            

    //       } else {
    //         setCurrentQuestionIndex(currentQuestionIndex + 1);
    //       }
    //     }
      // };

  return (
    <div className="questions-page">
      <div className="question-container">
        <h2 className="question-title">Please complete the survey below</h2>
        <iframe 
          id="qualtrics_survey" 
          src="https://ufl.qualtrics.com/jfe/form/SV_2ivgxDgetjRcX2e" 
          frameBorder="0"
          style={{ width: '100%', height: '800px' }}
        />
      </div>
      <div className="button-container">
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <button className="continue-button" onClick={() => navigate('/meditation', { state: { videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', description: "nature sound", benefits:"relax" } })}>Continue</button>
      </div>
    </div>
  );
}

export default QuestionsPage;



