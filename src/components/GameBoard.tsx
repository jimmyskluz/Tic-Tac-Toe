import { FC } from "react";

interface GameBoardProps {
  onSelectSquare: (r: number, c: number) => void;
  gameBoard: (string | null)[][];
}

const GameBoard: FC<GameBoardProps> = ({ onSelectSquare, gameBoard }) => {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={!!playerSymbol}
                >
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
