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