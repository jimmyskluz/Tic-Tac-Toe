import { FC, useState } from "react";

interface PlayerProps {
  initName: string;
  isActive: boolean;
  symbol: string;
}

const Player: FC<PlayerProps> = ({ initName, isActive, symbol }) => {
  const [playerName, setName] = useState(initName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">{editablePlayerName}</span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
