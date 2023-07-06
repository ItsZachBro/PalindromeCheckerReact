import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform palindrome check logic here
    const cleanedStr = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isPalin = cleanedStr === cleanedStr.split('').reverse().join('');
    setResult(isPalin ? `${input} is a palindrome!` : `${input} is not a palindrome.`);
    setInput('');
  };

  return (
    <div className="container">
      <h1>Palindrome Checker</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="input" placeholder="Enter Word/s" value={input} onChange={handleInputChange} required />
        <button type="submit">Check</button>
      </form>
      <p>{result}</p>
    </div>
  );
};

export default App;
