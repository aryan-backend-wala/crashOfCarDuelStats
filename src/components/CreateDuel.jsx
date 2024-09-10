import { useState } from "react";

export default function CreateDuel() {
  const [carName, setCarName] = useState("");  // No car selected initially
  const [rounds, setRounds] = useState([0, 0, 0]);  // Store rounds as an array of numbers
  const [total, setTotal] = useState(0);  // For holding the total sum of input values

  // Reset the form when a new car is selected
  function handleCarChange(e) {
    setCarName(e.target.value);
    setRounds([0,0,0])
    setTotal(0)
  }

  // Update the value for a specific round input
  function handleRoundChange(index, value) {
    const updatedRounds = [...rounds];
    updatedRounds[index] = parseInt(value) || 0;  // Ensure values are numbers
    setRounds(updatedRounds);
  }

  // Calculate the total when called
  function calculateTotal() {
    const sum = rounds.reduce((acc, round) => acc + round, 0);
    setTotal(sum);
    
  }

  return (
    <div>
      {/* Car selection dropdown */}
      <label>
        Choose a Car: {" "}
        <select value={carName} onChange={handleCarChange}>
          <option value="">Select Car</option>
          <option value="speed">Speed</option>
          <option value="shadow">Shadow</option>
        </select>
      </label>
      <br /><br />
      {/* Round input fields */}
      {rounds.map((round, index) => (
        <div key={index}>
          <input
            type="number"
            placeholder={`Round ${index + 1}`}
            value={round ? round : ""}
            onChange={(e) => handleRoundChange(index, e.target.value)}
          />
        </div>
      ))}
      <br />
      {/* Calculate total button */}
      <button onClick={calculateTotal}>Calculate Total</button>
      <p>Total: {total}</p>
    </div>
  );
}
