import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedText(inputText);
    setInputText(''); // Clear the input field after submission
  };
  return (
    <>
      <div>
        <h1>User Input Display</h1>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Type something..."
        />
        <p>Input: {inputText}</p>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <p>Input: {submittedText}</p>
    </>
  );
}
