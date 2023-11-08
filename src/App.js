import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    setAge(age);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label>
        Enter your Date of Birth: 
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </label>
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default App;
