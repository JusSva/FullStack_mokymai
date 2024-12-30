import { useState } from "react";
import "./board.css";

export default function Grid() {
  const [cells, setCells] = useState(Array(9).fill("")); // Array to store the state of each cell
  const [turn, setTurn] = useState("nulis"); // State to track the turn ("nulis" or "kryziukas")

  const handleCellClick = (index) => {
    // Prevent overwriting an already filled cell
    if (cells[index] !== "") return;

    // Update the cells array with the current turn's symbol
    const newCells = [...cells];
    newCells[index] = turn === "nulis" ? "O" : "X";
    setCells(newCells);

    // Toggle the turn
    setTurn(turn === "nulis" ? "kryziukas" : "nulis");
  };

  return (
    <div className="container">
      {cells.map((cell, index) => (
        <div
          key={index}
          className="kvadratas"
          onClick={() => handleCellClick(index)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
}
