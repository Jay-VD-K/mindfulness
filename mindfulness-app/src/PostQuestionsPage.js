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
import './QuestionsPage.css';

const PostQuestionsPage = () => {
  const questionSets = [
    [
      { id: 'mDES1', text: 'I felt amused, fun-loving, or silly.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES2', text: 'I felt angry, irritated, or annoyed.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES3', text: 'I felt ashamed, humiliated, or disgraced.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES4', text: 'I felt awe, wonder, or amazement.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES5', text: 'I felt contemptuous, scornful, or distainful.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES6', text: 'I felt disgust, distaste, or revulsion.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES7', text: 'I felt embarrassed, self-conscious, or blushing.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES8', text: 'I felt grateful, appreciative, or thankful.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES9', text: 'I felt guilty, repentant, or blame worthy.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES10', text: 'I felt hate, distrust, or suspicion.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES11', text: 'I felt hopeful, optimistic, or encouraged.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES12', text: 'I felt inspired, uplifted, or elevated.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES13', text: 'I felt interested, alert, or curious.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES14', text: 'I felt joyful, glad, or happy.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES15', text: 'I felt love, closeness, or trust.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES16', text: 'I felt proud, confident, or self-assured.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES17', text: 'I felt sad, downhearted, or unhappy.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES18', text: 'I felt scared, fearful, or afraid.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES19', text: 'I felt serene, content, or peaceful.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      { id: 'mDES20', text: 'I felt stressed, nervous, or overwhelmed.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      // PRS
      { id: 'PRSB1', text: 'It is an escape experience.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSB2', text: 'Spending time here gives me a good break from my day-to-day routine.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSF1', text: 'The setting has fascinating qualities.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSF2', text: 'My attention is drawn to many interesting things.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], 
    [
      { id: 'PRSF3', text: 'I would like to get to know this place better.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSF4', text: 'There is much to explore and discover here.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSF5', text: 'I would like to spend more time looking at the surroundings.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSCh1', text: 'There is too much going on.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSCh2', text: 'It is a confusing place.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSCh3', text: 'There is a great deal of distraction.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSCh4', text: 'It is chaotic here.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSCp1', text: 'I can do things I like here.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSCp2', text: 'I have a sense that I belong here.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSCp3', text: 'I have a sense of oneness with this setting.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSCp4', text: 'Being here suits my personality.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
      { id: 'PRSCp5', text: 'I could find ways to enjoy myself in a place like this.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
    //  EQNS
      { id: 'EQNS1', text: 'I think that I would like to visit the website in the future because of the experience quality of the nature sounds.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'EQNS2', text: 'The nature sounds on the website is easy to experience virtually.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'EQNS3', text: 'I would imagine that people would learn to experience this new type of nature sounds virtual display in the future.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'EQNS4', text: 'I felt confident experiencing the nature sounds on the website.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'EQNS5', text: 'I felt the nature sounds were well integrated with other elements to be displayed on the website.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      // EQND
      { id: 'EQND1', text: 'I think that I would like to visit the website in the future because of the experience quality of the nature destinations.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'EQND2', text: 'The nature destinations on the website is easy to experience virtually.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'EQND3', text: 'I would imagine that people would learn to experience this new type of nature destinations virtual display in the future.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'EQND4', text: 'I felt confident experiencing the nature destinations on the website.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'EQND5', text: 'I felt the nature destinations were well integrated with other elements to be displayed on the website.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      // EQGM
      { id: 'EQGM1', text: 'I think that I would like to visit the website in the future because of the experience quality of the guided meditation.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'EQGM2', text: 'The guided meditation on the website is easy to experience virtually.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'EQGM3', text: 'I would imagine that people would learn to experience this new type of guided meditation virtual display in the future.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'EQGM4', text: 'I felt confident experiencing the guided meditation on the website.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'EQGM5', text: 'I felt the guided meditation was well integrated with other elements to be displayed on the website.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'OEQ1', text: 'Overall, how would you rate the experience quality of the nature sound presented on the website?',
        answerOptions: [
          { label: "Extremly good disagree", value: "1" },
          { label: "Very good", value: "2" },
          { label: "Good", value: "3" },
          { label: "Moderate", value: "4" },
          { label: "Poor", value: "5" },
          { label: "Very Poor", value: "6" },
          { label: "Extremely poor", value: "7" },
        ],
      },
    ], [
      { id: 'OEQ2', text: 'Overall, how would you rate the experience quality of the nature destination presented on the website?',
        answerOptions: [
          { label: "Extremly good disagree", value: "1" },
          { label: "Very good", value: "2" },
          { label: "Good", value: "3" },
          { label: "Moderate", value: "4" },
          { label: "Poor", value: "5" },
          { label: "Very Poor", value: "6" },
          { label: "Extremely poor", value: "7" },
        ],
      },
    ], [
      { id: 'OEQ3', text: 'Overall, how would you rate the experience quality of the guided meditation presented on the website?',
        answerOptions: [
          { label: "Extremly good disagree", value: "1" },
          { label: "Very good", value: "2" },
          { label: "Good", value: "3" },
          { label: "Moderate", value: "4" },
          { label: "Poor", value: "5" },
          { label: "Very Poor", value: "6" },
          { label: "Extremely poor", value: "7" },
        ],
      },
    ], [
      // FPEB
      { id: 'FPEB1', text: 'In the future, I will adequately complete assigned duties in environmentally friendly ways.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'FPEB2', text: 'In the future, I will fulfill responsibilities specified in my job description in environmentally-friendly ways.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'FPEB3', text: 'In the future, I will perform tasks that are expected of me in environmentally-friendly ways.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'FPEB4', text: 'In the future, I will take a chance to get actively involved in environmental protection at work.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'FPEB5', text: 'In the future, I will take initiative to act in environmentally-friendly ways at work.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'FPEB6', text: 'In the future, I will do more for the environment at work than I was expected to.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
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
    
    // navigate(nextPage, { state: { videoUrl: videoUrl, description: "nature sound", benefits:"relax" } });

    try {
      const response = await fetch('http://minfulness-api.ue.r.appspot.com/savePostSurveyResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(allResponses)
      });
  
      if (!response.ok) {
        throw new Error('Failed to get video URL');
        // navigate('/meditation', { state: { videoUrl: 'https://www.dropbox.com/s/mvu95wbgrjsln94/1.mp4?raw=1', description: "nature sound", benefits:"relax" } });
      }
  
      const data = await response.json();
      const { videoUrl } = data;
  
      navigate(nextPage, {
        state: {
          videoUrl,
          description: "nature sound", benefits:"relax"
        }
      });
    } catch (error) {
      console.error(error);
    }
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


