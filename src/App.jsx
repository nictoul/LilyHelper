import "bootstrap/dist/css/bootstrap.min.css";

// Import necessary React components
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import GameControls from "./components/GameControls";
import GameInput from "./components/GameInput";
import Score from "./components/Score";
import RandomImage from "./components/RandomImage";

// Define the main App component
export default function App() {
  const [input, setInput] = useState(""); // State to hold the user input
  const [score, setScore] = useState({
    userEntry: "",
    numberOfTry: 0,
    numberOfSuccess: 0,
  }); // State to hold the score

  // Handle the button click to select a random word
  const handleChange = (parameters) => {
    const items = input
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item); // Split input, trim, and remove empty items
    if (items.length > 0) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setScore((prevValues) => {
        return {
          userEntry: randomItem,
          numberOfTry: parameters.numberOfTry,
          numberOfSuccess: parameters.numberOfSuccess,
        };
      });
    } else {
      setScore((prevValues) => {
        return {
          userEntry: "",
          numberOfTry: 0,
          numberOfSuccess: 0,
        };
      });
    }
  };

  return (
    <Container fluid className="bg-dark text-white custom-container">
      <h1>L'application Lily</h1>
      <GameInput input={input} setInput={setInput} />
      <GameControls handleChange={handleChange} score={score} />
      <Score score={score} />
      <RandomImage score={score} />
    </Container>
  );
}
