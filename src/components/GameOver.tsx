import { FC } from "react";

interface GameOverProps {
  winner: string;
  onRestart: () => void;
}

const GameOver: FC<GameOverProps> = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
