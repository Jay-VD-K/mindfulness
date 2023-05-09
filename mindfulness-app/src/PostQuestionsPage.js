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
      <label>
        <input type="radio" value="4" checked={selectedValue === "4"} onChange={handleOptionChange} />
        Neither agree or disagree
      </label>
      <label>
        <input type="radio" value="5" checked={selectedValue === "5"} onChange={handleOptionChange} />
        Somewhat agree
      </label>
      <label>
        <input type="radio" value="6" checked={selectedValue === "6"} onChange={handleOptionChange} />
        Agree
      </label>
      <label>
        <input type="radio" value="7" checked={selectedValue === "7"} onChange={handleOptionChange} />
        Strongly agree
      </label>
    </div>
    </div>
    
    </div>
  );
};

const PostQuestionsPage = () => {
  const questions = [
    { id: 'FPEB1', text: 'In the future, I will adequately complete assigned duties in environmentally friendly ways.' },
    { id: 'FPEB2', text: 'In the future, I will fulfill responsibilities specified in my job description in environmentally-friendly ways.' },
    { id: 'FPEB3', text: 'In the future, I will perform tasks that are expected of me in environmentally-friendly ways.' },
    { id: 'FPEB4', text: 'In the future, I will take a chance to get actively involved in environmental protection at work.' },
    { id: 'FPEB5', text: 'In the future, I will take initiative to act in environmentally-friendly ways at work.' },
    { id: 'FPEB6', text: 'In the future, I will do more for the environment at work than I was expected to.' },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(responses); // Do something with the responses, like send them to a server
  };


  const handleContinueClick = () => {
    // if (selectedAnswerIndex !== null) {
    //   onAnswerSelected(currentQuestionIndex, selectedAnswerIndex);
    //   setSelectedAnswerIndex(null);
    //   if (currentQuestionIndex === questions.length - 1) {
      navigate(nextPage, { state: {videoUrl: videoUrl} });
    //   } else {
        // setCurrentQuestionIndex(currentQuestionIndex + 1);
      // }
    // }
  };
  

  const handleBackClick = () => {
    // if (currentQuestionIndex > 0) {
    //   onBackClick(currentQuestionIndex);
    //   setSelectedAnswerIndex(null);
    //   setCurrentQuestionIndex(currentQuestionIndex - 1);
    // }
    // else{
      navigate(-1);
    // }
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
        <button className="continue-button" onClick={handleContinueClick} disabled={!allQuestionsAnswered}>Continue</button>
      </div>
    </form>
  );
};

export default PostQuestionsPage;
