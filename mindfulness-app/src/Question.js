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

  // const questions = [
  //   {
  //     id: "FPEB1",
  //     text: "In the future, I will adequately complete assigned duties in environmentally friendly ways.",
  //   },
  //   {
  //     id: "FPEB2",
  //     text: "In the future, I will fulfill responsibilities specified in my job description in environmentally-friendly ways.",
  //   },
  //   {
  //     id: "FPEB3",
  //     text: "In the future, I will perform tasks that are expected of me in environmentally-friendly ways.",
  //   },
  //   {
  //     id: "FPEB4",
  //     text: "In the future, I will take a chance to get actively involved in environmental protection at work.",
  //   },
  //   {
  //     id: "FPEB5",
  //     text: "In the future, I will take initiative to act in environmentally-friendly ways at work.",
  //   },
  //   {
  //     id: "FPEB6",
  //     text: "In the future, I will do more for the environment at work than I was expected to.",
  //   },
  // ];
  // const [responses, setResponses] = useState(
  //   questions.reduce((acc, q) => ({ ...acc, [q.id]: "" }), {})
  // );

  // const handleChange = (event) => {
  //   setResponses({
  //     ...responses,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  

  return (
    <div className="questions-page">

{/* <div className="mcq-container">
      <div className="mcq-question">
        <p>Level of Agreement</p>
        <div className="mcq-agreement">
          <span>1 - Strongly disagree</span>
          <span>2 - Disagree</span>
          <span>3 - Somewhat disagree</span>
          <span>4 - Neither agree or disagree</span>
          <span>5 - Somewhat agree</span>
          <span>6 - Agree</span>
          <span>7 - Strongly agree</span>
        </div>
      </div>
      {questions.map((q) => (
        <div key={q.id} className="mcq-question">
          <p>{q.text}</p>
          <div className="mcq-response">
            <input
              type="radio"
              name={q.id}
              value="1"
              onChange={handleChange}
            />
            <input
              type="radio"
              name={q.id}
              value="2"
              onChange={handleChange}
            />
            <input
              type="radio"
              name={q.id}
              value="3"
              onChange={handleChange}
            />
            <input
              type="radio"
              name={q.id}
              value="4"
              onChange={handleChange}
            />
            <input
              type="radio"
              name={q.id}
              value="5"
              onChange={handleChange}
            />
            <input
              type="radio"
              name={q.id}
              value="6"
              onChange={handleChange}
            />
            <input
              type="radio"
              name={q.id}
              value="7"
              onChange={handleChange}
            />
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
      ))}
    </div> */}
      
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

export default Question;