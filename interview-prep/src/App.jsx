import { useState } from "react";
import "./App.css";

function App() {
  const [completed, setCompleted] = useState(0);

  const topics = [
    "Python",
    "SQL",
    "PySpark",
    "AWS",
    "System Design",
  ];

  return (
    <div className="app">
      <div className="card">
        <h1>Interview Prep Tracker 🚀</h1>
        <p className="subtitle">
          Track your Data Engineering preparation
        </p>

        <div className="progress-box">
          <span>Progress</span>
          <strong>
            {completed} / {topics.length}
          </strong>
        </div>

        <div className="topics">
          {topics.map((topic, index) => (
            <div className="topic" key={topic}>
              <span>{topic}</span>

              <button
                onClick={() => setCompleted((prev) => prev + 1)}
                disabled={completed > index}
              >
                {completed > index ? "Completed ✓" : "Mark Done"}
              </button>
            </div>
          ))}
        </div>

        <p className="footer">
          Keep learning. Keep growing. 💻
        </p>
      </div>
    </div>
  );
}

export default App;