  // src/App.jsx

  import React from "react";
  import SpeechToSign from "./components/SpeechToSign";  // Import the SpeechToSign component
  import "./App.css";

  const App = () => {
    return (
      <div className="App">
        <h1>AI-Based Speech to Sign Avatar</h1>
        
        {/* Render the SpeechToSign component */}
        <SpeechToSign />
        
        <hr />
        
        
      </div>
    );
  };

  export default App;
