import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([]);
  const [playerX, setPlayerX] = useState();
  const [playerO, setPlayerO] = useState();
  const [tile, setTile] = useState();

  const gameState = {
    board,
    setBoard,
    tile,
    setTile,
    playerX,
    setPlayerX,
    playerO,
    setPlayerO
  };

  return <GameContext.Provider value = {{ ...gameState }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };