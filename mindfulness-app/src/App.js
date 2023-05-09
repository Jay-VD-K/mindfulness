// import React, { useState } from 'react';
// import './App.css';
// import LandingPage from './LandingPage';
// import QuestionsPage from './QuestionsPage';
// import MeditationPage from './MeditationPage';

// function App() {
//   const [questions, setQuestions] = useState([
//     {
//       id: 1,
//       question: 'How are you feeling today?',
//       answers: ['Stressed', 'Tired', 'Relaxed', 'Energetic'],
//       selectedAnswerIndex: null
//     }
//   ]);

//   const [currentPage, setCurrentPage] = useState('landing');

//   const handleAnswerSelected = (questionIndex, answerIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].selectedAnswerIndex = answerIndex;
//     setQuestions(updatedQuestions);
//   };

//   const handleBackClick = (questionIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].selectedAnswerIndex = null;
//     setQuestions(updatedQuestions);
//   };

//   const handleStartClick = () => {
//     setCurrentPage('questions');
//   };

//   const handleQuestionsComplete = () => {
//     setCurrentPage('meditation');
//   };

//   let page = null;
//   if (currentPage === 'landing') {
//     page = <LandingPage onStartClick={handleStartClick} />;
//   } else if (currentPage === 'questions') {
//     page = (
//       <QuestionsPage
//         questions={questions}
//         onAnswerSelected={handleAnswerSelected}
//         onBackClick={handleBackClick}
//         onComplete={handleQuestionsComplete}
//       />
//     );
//   } else if (currentPage === 'meditation') {
//     page = <MeditationPage />;
//   }

//   return (
//     <div className="App">
//       {page}
//     </div>
//   );
// }

// export default App;

//need to be used
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import QuestionsPage from './QuestionsPage';
import PostQuestionsPage from './PostQuestionsPage';
import MeditationPage from './MeditationPage';
import VideoPage from './VideoPage';
import FinalPage from './FinalPage';
import AboutUs from './AboutUs';
import SurveyGuide from './SurveyGuide';

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'How are you feeling today?',
      answers: ['Stressed', 'Tired', 'Relaxed', 'Energetic'],
      selectedAnswerIndex: null
    }
  ]);

  const [currentPage, setCurrentPage] = useState('landing');

  const handleAnswerSelected = (questionIndex, answerIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].selectedAnswerIndex = answerIndex;
    setQuestions(updatedQuestions);
  };

  const handleBackClick = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].selectedAnswerIndex = null;
    setQuestions(updatedQuestions);
  };

  const handleStartClick = () => {
    setCurrentPage('questions');
  };

  const handleQuestionsComplete = () => {
    setCurrentPage('meditation');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage onStartClick={handleStartClick} />}/>
          <Route path="/questions" element={
            <QuestionsPage
              questions={questions}
              onAnswerSelected={handleAnswerSelected}
              onBackClick={handleBackClick}
              onComplete={handleQuestionsComplete}
            />
          }/>
          <Route path="/meditation" element={<MeditationPage />}/>
          <Route path="/video" element={<VideoPage />}/>
          <Route path="/postquestions" element={
            <PostQuestionsPage
              questions={questions}
              onAnswerSelected={handleAnswerSelected}
              onBackClick={handleBackClick}
              onComplete={handleQuestionsComplete}
            />
          }/>
          <Route path="/final" element={<FinalPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/survey" element={<SurveyGuide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// oldest

// import React, { useState } from 'react';
// import LandingPage from './LandingPage';
// import QuestionsPage from './QuestionsPage';
// import MeditationPage from './MeditationPage';
// import './App.css';

// function App() {
//   const [showLandingPage, setShowLandingPage] = useState(true);
//   const [showQuestionsPage, setShowQuestionsPage] = useState(false);
//   const [showMeditationPage, setShowMeditationPage] = useState(false);
//   const [selectedAnswers, setSelectedAnswers] = useState([]);

//   const handleGetStartedClick = () => {
//     setShowLandingPage(false);
//     setShowQuestionsPage(true);
//   };

//   const handleAnswerSelected = (questionIndex, answerIndex) => {
//     setSelectedAnswers((prevSelectedAnswers) => {
//       const newSelectedAnswers = [...prevSelectedAnswers];
//       newSelectedAnswers[questionIndex] = answerIndex;
//       return newSelectedAnswers;
//     });
//   };

//   const handleBackClick = (currentQuestionIndex) => {
//     setSelectedAnswers((prevSelectedAnswers) => {
//       const newSelectedAnswers = [...prevSelectedAnswers];
//       newSelectedAnswers.splice(currentQuestionIndex, 1);
//       return newSelectedAnswers;
//     });
//   };

//   const handleMeditateClick = () => {
//     setShowQuestionsPage(false);
//     setShowMeditationPage(true);
//   };

//   const questions = [
//     {
//       question: 'What is your age?',
//       answers: ['Under 18', '18-35', '36-50', 'Over 50'],
//     },
//     {
//       question: 'What is your gender?',
//       answers: ['Male', 'Female', 'Non-binary', 'Prefer not to say'],
//     },
//     {
//       question: 'How often do you feel stressed?',
//       answers: ['Rarely', 'Sometimes', 'Often', 'Almost always'],
//     },
//     // Add more questions here
//   ];

//   return (
//     <div className="App">
//       {showLandingPage && <LandingPage onGetStartedClick={handleGetStartedClick} />}
//       {showQuestionsPage && (
//         <QuestionsPage
//           questions={questions}
//           onAnswerSelected={handleAnswerSelected}
//           onBackClick={handleBackClick}
//           onMeditateClick={handleMeditateClick}
//         />
//       )}
//       {showMeditationPage && <MeditationPage selectedAnswers={selectedAnswers} />}
//     </div>
//   );
// }

// export default App;
