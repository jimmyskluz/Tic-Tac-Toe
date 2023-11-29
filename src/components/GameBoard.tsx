import { FC } from "react";
import { Turn } from "../models/Turn";

const initialBoard: (string | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

interface GameBoardProps {
  onSelectSquare: (r: number, c: number) => void;
  turns: Turn[];
}

const GameBoard: FC<GameBoardProps> = ({ onSelectSquare, turns }) => {
  const gameBoard = initialBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
