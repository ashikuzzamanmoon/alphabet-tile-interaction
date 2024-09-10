import { useState } from "react";
import "./App.css";

const AlphabetTileInteraction = () => {
  const [outputString, setOutputString] = useState("");

  // Function to handle tile click
  const handleTileClick = (letter) => {
    let newOutputString = outputString + letter;

    // Replace three or more consecutive identical letters with "_"
    newOutputString = newOutputString.replace(/([A-Z])\1{2,}/g, (match) => {
      return "_".repeat(match.length);
    });

    // Update the output string state
    setOutputString(newOutputString);
  };

  // Generate the alphabet letters A-Z
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div className="container">
      <h1>Alphabet Tile Interaction</h1>
      <div className="tile-grid">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="tile"
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>

      {/* Output string */}
      <div className="output-container">
        <h2>
          Output String: <span id="outputString">{outputString}</span>
        </h2>
      </div>
    </div>
  );
};

export default AlphabetTileInteraction;
