import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { Turn } from "./models/Turn";

function App() {
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setActivePlayer((active) => (active === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (gameTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns: Turn[] = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} />
      </div>
    </main>
  );
}

export default App;
