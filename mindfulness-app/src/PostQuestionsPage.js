// import React, { useState, useEffect } from 'react';
// import Question from './Question';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './PostQuestionsPage.css'

// const PostQuestionsPage = () => {
//   const questions = [
//     { id: 'FPEB1', text: 'In the future, I will adequately complete assigned duties in environmentally friendly ways.' },
//     { id: 'FPEB2', text: 'In the future, I will fulfill responsibilities specified in my job description in environmentally-friendly ways.' },
//     // { id: 'FPEB3', text: 'In the future, I will perform tasks that are expected of me in environmentally-friendly ways.' },
//     // { id: 'FPEB4', text: 'In the future, I will take a chance to get actively involved in environmental protection at work.' },
//     // { id: 'FPEB5', text: 'In the future, I will take initiative to act in environmentally-friendly ways at work.' },
//     // { id: 'FPEB6', text: 'In the future, I will do more for the environment at work than I was expected to.' },
//   ];

//   const questionsSet2 = [
//     { id: 'FPEB3', text: 'In the future, I will use environmentally friendly products and services whenever possible.' },
//     { id: 'FPEB4', text: 'In the future, I will promote environmental awareness in my workplace.' },
//   ];

//   const [responses, setResponses] = useState({});
  
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

//   const allQuestions = [...questions, ...questionsSet2];

//   const navigate = useNavigate();

//   const location = useLocation();
//   const {nextPage, videoUrl} = location.state;

//   const handleQuestionChange = (questionId, value) => {
//     setResponses((prevResponses) => ({
//       ...prevResponses,
//       [allQuestions[currentQuestionIndex].id]: value,
//       // [questionId]: value,
//     }));
//   };

//   useEffect(() => {
//     // Check if all questions have been answered
//     setAllQuestionsAnswered(
//       questions.every((question) => responses[question.id])
//     );
//   }, [responses, questions]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("responses-----",responses);

//     const allAnswered = allQuestions.every((question) => responses[question.id]);
//   setAllQuestionsAnswered(allAnswered);

//   if (allAnswered) {
//     // Navigate to next set of questions or next page
//     if (currentQuestionIndex === questions.length - 1) {
//       navigate(nextPage, { state: {videoUrl: videoUrl} });
//     } else {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   }
    
//     // try {
//     //   const response = await fetch('/api/responses', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify(responses)
//     //   });
      
//     //   if (response.ok) {
//     //     // Handle successful response
//     //   } else {
//     //     // Handle error response
//     //   }
//     // } catch (error) {
//     //   // Handle network error
//     // }
//   };


//   const handleContinueClick = (e) => {
//     e.preventDefault();
//     // console.log("responses-----",responses);

    
//     // if (selectedAnswerIndex !== null) {
//     //   onAnswerSelected(currentQuestionIndex, selectedAnswerIndex);
//     //   setSelectedAnswerIndex(null);
//     //   if (currentQuestionIndex === questions.length - 1) {
//       handleQuestionChange(); 
//     // navigate(nextPage, { state: {videoUrl: videoUrl} });
    
//     //   } else {
//         // setCurrentQuestionIndex(currentQuestionIndex + 1);
//       // }
//     // }
//   };
  

//   const handleBackClick = () => {
//     // if (currentQuestionIndex > 0) {
//     //   onBackClick(currentQuestionIndex);
//     //   setSelectedAnswerIndex(null);
//     //   setCurrentQuestionIndex(currentQuestionIndex - 1);
//     setCurrentQuestionIndex(currentQuestionIndex - 1);
//     // }
//     // else{
//       navigate(-1);
//     // }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {questions.map((question) => (
//         <Question
//           key={allQuestions[currentQuestionIndex].id}
//           questionText={allQuestions[currentQuestionIndex].text}
//           onChange={handleQuestionChange}
//         />
//       ))}
//       {/* <button type="submit">Submit</button> */}
//       <div className="post-button-container">
//         {/* <button className="back-button" onClick={handleBackClick}>Back</button> */}
//         <button type="button" className="continue-button" onClick={handleContinueClick} disabled={!allQuestionsAnswered}>Continue</button>
//         <button type="submit" className="continue-button" onClick={handleSubmit} disabled={!allQuestionsAnswered}>submit</button>
//       </div>
//     </form>
//   );
// };

// export default PostQuestionsPage;

// // Survey

// // import React, { useState, useEffect } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';

// // function PostQuestionsPage() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const {nextPage, videoUrl} = location.state;
// //   const surveyUrl = 'https://ufl.qualtrics.com/jfe/form/SV_203gFGhpbc1PfZc?nextPage=' + nextPage + '&videoUrl=' + videoUrl;

// //   const [surveyCompleted, setSurveyCompleted] = useState(false);

// //   const handleContinueClick = () => {
// //     navigate(nextPage, { state: {videoUrl: videoUrl} });
// //   };

// //   useEffect(() => {
// //     const script = document.createElement('script');
// //     script.src = 'https://survey.qualtrics.com/API/inContext/js/embedded/SurveyEngine.js';
// //     script.async = true;
// //     document.body.appendChild(script);

// //     window.addEventListener('load', () => {
// //       window.Qualtrics.SurveyEngine.addOnReady(() => {
// //         window.Qualtrics.SurveyEngine.addOnUnload(() => {
// //           setSurveyCompleted(true);
// //         });
// //       });
// //     });
// //   }, []);

// //   return (
// //     <div>
// //       <iframe
// //         src={surveyUrl}
// //         title="survey"
// //         width="100%"
// //         height="800px"
// //         frameBorder="0"
// //       />
// //       {/* <button className="continue-button" onClick={handleContinueClick} 
// //       // disabled={!surveyCompleted}
// //       >Continue</button> */}
// //     </div>
// //   );
// // }

// // export default PostQuestionsPage;


import React, { useState, useEffect } from 'react';
import Question from './Question';
import { useNavigate, useLocation } from 'react-router-dom';
import './PostQuestionsPage.css';

const PostQuestionsPage = () => {
  const questionSets = [
    [
      { id: 'BV1', text: 'What is your ethnicity?', 
        answerOptions: [
          { label: "American Indian or Alaska Native", value: "1" },
          { label: "Asian", value: "2" },
          { label: "Black or African American", value: "3" },
          { label: "Hispanic or Latino", value: "4" },
          { label: "Native Hawaiian or Other Pacific Islander", value: "5" },
          { label: "White or Caucasian", value: "6" },
          { label: "Others", value: "7" },
        ],
      },
    ], [
      { id: 'BV2', text: 'With which gender orientation do you most identify?',
        answerOptions: [
          { label: "Male", value: "1" },
          { label: "Female", value: "2" },
          { label: "Non-binary/third gender", value: "3" },
          { label: "Prefer not to say", value: "4" },
          { label: "Prefer to self-describe", value: "5" },
        ],
      },
    ],
  ];

  const [currentQuestionSetIndex, setCurrentQuestionSetIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const { nextPage, videoUrl } = location.state;

  const currentQuestions = questionSets[currentQuestionSetIndex];

  const handleQuestionChange = (questionId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  useEffect(() => {
    // Check if all questions have been answered
    setAllQuestionsAnswered(
      // questionSets[currentQuestionSetIndex].every((question) => responses[question.id])
      currentQuestions.every((question) => responses[question.id])
    );
  }, [responses, questionSets, currentQuestionSetIndex]);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const allResponses = {...responses};
    // console.log("allResponses-----", allResponses);
    // navigate(nextPage, { state: {videoUrl: videoUrl} });
    e.preventDefault();
    const allResponses = {...responses};
    console.log("allResponses-----", allResponses);
    
    navigate(nextPage, { state: { videoUrl: videoUrl, description: "nature sound", benefits:"relax" } });

    // try {
    //   const response = await fetch('http://184.188.101.162:5000/savePostSurveyResponse', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(allResponses)
    //   });
  
    //   if (!response.ok) {
    //     throw new Error('Failed to get video URL');
    //     // navigate('/meditation', { state: { videoUrl: 'https://www.dropbox.com/s/mvu95wbgrjsln94/1.mp4?raw=1', description: "nature sound", benefits:"relax" } });
    //   }
  
    //   const data = await response.json();
    //   const { videoUrl } = data;
  
    //   navigate('/meditation', {
    //     state: {
    //       videoUrl,
    //       description: "nature sound", benefits:"relax"
    //     }
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };


  const handleContinueClick = (e) => {
    e.preventDefault();
    // console.log('responses-----', responses);
    // if (allQuestionsAnswered) {
    //   if (currentQuestionSetIndex === questionSets.length - 1) {
    //     navigate(nextPage, { state: { videoUrl: videoUrl } });
    //   } else {
    //     setCurrentQuestionSetIndex(currentQuestionSetIndex + 1);
    //     setResponses({});
    //   }
    // }

    setResponses((prevResponses) => ({
      ...prevResponses,
      ...Object.fromEntries(
        currentQuestions.map(({ id }) => [
          id,
          prevResponses[id] || null
        ])
      )
    }));
    setCurrentQuestionSetIndex((prevIndex) => prevIndex + 1);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    if (currentQuestionSetIndex > 0) {
      // setCurrentQuestionSetIndex(currentQuestionSetIndex - 1);
      setCurrentQuestionSetIndex((prevIndex) => prevIndex - 1);
      setResponses({});
    } else {
      navigate(-1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* {questionSets[currentQuestionSetIndex].map((question) => (
         */}
        {currentQuestions.map((question) => (
        <Question
          key={question.id}
          questionText={question.text}
          answerOptions={question.answerOptions}
          onChange={(value) => handleQuestionChange(question.id, value)}
        />
      ))}
      <div className="post-button-container">
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
        {/* <button
          type="submit"
          className="continue-button"
          onClick={handleContinueClick}
          disabled={!allQuestionsAnswered}
        >
          Continue
        </button> */}

{currentQuestionSetIndex < questionSets.length - 1 ? (
          <button
            type="submit"
            className="continue-button"
            onClick={handleContinueClick}
            disabled={!allQuestionsAnswered}
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            className="submit-button"
            disabled={!allQuestionsAnswered}
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default PostQuestionsPage;

