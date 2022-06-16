import React, { useState } from "react";
import Square from "./Square";

function Board() {
  let XorY = ""; //value X or Y
  const [turn, setTurn] = useState(true); // Decides turn toggles btn x and y
  const [squares, setSquares] = useState(Array(9).fill(null)); //array to store individual value

  turn ? (XorY = "X") : (XorY = "Y");

  const handleUpdate = (i) => {
    if (squares[i] === null && win === null) {
      const squares1 = squares.slice();
      squares1[i] = XorY;
      setSquares(squares1);
      setTurn(!turn);
    }
    return null;
  };

  const square = (i) => {
    return <Square value={squares[i]} handleUpdate={() => handleUpdate(i)} />;
  };

  const Winner = () => {
    const pos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0;  i < pos.length; i++) {
      const [a, b, c] = pos[i];
      if (squares[a] === squares[b] && squares[b] === squares[c]) {
          return squares[a];
      }    
    }
    return null;
  };

  var win = Winner();
  return (
    <>
      <div className="player">Next Turn: {XorY}</div>
      <div className="squares">
        {square(0)}
        {square(1)}
        {square(2)}
        {square(3)}
        {square(4)}
        {square(5)}
        {square(6)}
        {square(7)}
        {square(8)}
      </div>
      <div>Winner : {win}</div>
    </>
  );
}

export default Board;
