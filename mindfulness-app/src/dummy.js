datacenter id: ufl.yul1   ca1

api token: LGhSUEXkhKJCGrCYgKUMxCzc20nQaihrTZvWjTY6


import React, { useState, useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import './PostQuestionsPage.css'

const Question = ({ questionText, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="questions-page">
      
      <div className="question-container">
        <h2 className="question-title">
          {questionText}</h2>
          <div className="answer-options">
      <label>
        <input type="radio" value="1" checked={selectedValue === "1"} onChange={handleOptionChange} />
        Strongly disagree
      </label>
      <label>
        <input type="radio" value="2" checked={selectedValue === "2"} onChange={handleOptionChange} />
        Disagree
      </label>
      <label>
        <input type="radio" value="3" checked={selectedValue === "3"} onChange={handleOptionChange} />
        Somewhat disagree
       </label>
    </div>
    </div>
    
    </div>
  );
};

const PostQuestionsPage = () => {
  const questions = [
    { id: 'FPEB1', text: 'In the future, I will adequately complete assigned duties in environmentally friendly ways.' },
    { id: 'FPEB2', text: 'In the future, I will fulfill responsibilities specified in my job description in environmentally-friendly ways.' }
  ];

  const [responses, setResponses] = useState({});
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const {nextPage, videoUrl} = location.state;

  const handleQuestionChange = (questionId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  useEffect(() => {
    // Check if all questions have been answered
    setAllQuestionsAnswered(
      questions.every((question) => responses[question.id])
    );
  }, [responses, questions]);


  const handleContinueClick = (e) => {
    e.preventDefault();
    console.log("responses-----",responses);
      navigate(nextPage, { state: {videoUrl: videoUrl} });
    
  };
  

  const handleBackClick = () => {

      navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <Question
          key={question.id}
          questionText={question.text}
          onChange={(value) => handleQuestionChange(question.id, value)}
        />
      ))}
      {/* <button type="submit">Submit</button> */}
      <div className="post-button-container">
        {/* <button className="back-button" onClick={handleBackClick}>Back</button> */}
        <button type="submit" className="continue-button" onClick={handleContinueClick} disabled={!allQuestionsAnswered}>Continue</button>
      </div>
    </form>
  );
};

export default PostQuestionsPage;



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
//         navigate('/meditation', { state: { videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', description: "nature sound", benefits:"relax" } });
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

// // import React from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import './QuestionsPage.css';

// // function QuestionsPage() {
// //   const location = useLocation();
// //   const {nextPage} = location.state;
// //   const navigate = useNavigate();

// //   return (
// //     <div className="questions-page">
// //       <div className="question-container">
// //         <h2 className="question-title">Please complete the survey below</h2>
// //         <iframe 
// //           id="qualtrics_survey" 
// //           src="https://ufl.qualtrics.com/jfe/form/SV_2ivgxDgetjRcX2e" 
// //           frameBorder="0"
// //           style={{ width: '100%', height: '800px' }}
// //         />
// //       </div>
// //       <div className="button-container">
// //         <button className="back-button" onClick={() => navigate(-1)}>Back</button>
// //         <button className="continue-button" onClick={() => navigate('/meditation', { state: { videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', description: "nature sound", benefits:"relax" } })}>Continue</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default QuestionsPage;



// // import React, { useEffect } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import './QuestionsPage.css';

// // function QuestionsPage() {
// //   const location = useLocation();
// //   const { nextPage } = location.state;
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // API endpoint to get survey responses
// //     const apiEndpoint = `https://ufl.ca1.qualtrics.com/API/v3/surveys/SV_2ivgxDgetjRcX2e/export-responses`;
    
// //     // Replace 'yourapitoken' with your API token
// //     const apiToken = 'LGhSUEXkhKJCGrCYgKUMxCzc20nQaihrTZvWjTY6';

// //     fetch(apiEndpoint, {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'X-API-TOKEN': apiToken,
// //       },
// //       body: JSON.stringify({
// //         format: 'json',
// //         useLabels: true,
// //       }),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => console.log(data))
// //       .catch((error) => console.error(error));
// //   }, []);

// //   return (
// //     <div className="questions-page">
// //       <div className="question-container">
// //         <h2 className="question-title">Please complete the survey below</h2>
// //         <iframe
// //           id="qualtrics_survey"
// //           src="https://ufl.qualtrics.com/jfe/form/SV_2ivgxDgetjRcX2e"
// //           frameBorder="0"
// //           style={{ width: '100%', height: '800px' }}
// //         />
// //       </div>
// //       <div className="button-container">
// //         <button className="back-button" onClick={() => navigate(-1)}>
// //           Back
// //         </button>
// //         <button
// //           className="continue-button"
// //           onClick={() =>
// //             navigate('/meditation', {
// //               state: {
// //                 videoUrl:
// //                   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
// //                 description: 'nature sound',
// //                 benefits: 'relax',
// //               },
// //             })
// //           }
// //         >
// //           Continue
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default QuestionsPage;