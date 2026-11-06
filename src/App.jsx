
import React, { useState } from "react";
import "./App.css";

function ScoreBoard({ score }) {
  return (
    <div className="score-box">
      <p>TOTAL MARKS</p>
      <h2>{score} / 100</h2>
      <p>{score >= 40 ? "Passed" : "Keep Practicing!"}</p>
    </div>
  );
}

function Controls({ addRun }) {
  return (
    <button onClick={addRun}>Add Marks +5</button>
  );
}

function App() {
  const [score, setScore] = useState(75);

  const addRun = () => {
    setScore((prev) => Math.min(prev + 5, 100));
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Student Score Board</h1>
        <p className="subtitle">Academic Performance Dashboard</p>

        <div className="student-info">
          <h2>Student Details</h2>
          <p><b>Name:</b> Student Name</p>
          <p><b>Roll Number:</b> 25CS0001</p>
          <p><b>Department:</b> Computer Science</p>
          <p><b>Subject:</b> Front End Development</p>
        </div>

        <ScoreBoard score={score} />

        <Controls addRun={addRun} />

        <p className="footer">
          Keep Learning • Keep Growing!
        </p>
      </div>
    </div>
  );
}

export default App;
