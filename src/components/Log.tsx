import { FC } from "react";
import { Turn } from "../models/Turn";

interface LogProps {
  turns: Turn[];
}

const Log: FC<LogProps> = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.col}${turn.square.row}`}>
          {turn.player} selected - {turn.square.col},{turn.square.row}
        </li>
      ))}
    </ol>
  );
};

export default Log;
