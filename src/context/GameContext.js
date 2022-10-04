import { createContext, useState } from 'react';

const GameContext = createContext();

const initialBoard = 

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([initialBoard]);
  const [playerX, setPlayerX] = useState();
  const [playerO, setPlayerO] = useState();
  const [tile, setTile] = useState();
  const [active, setActive] = useState();

  const gameState = {
    board,
    setBoard,
    tile,
    setTile,
    playerX,
    setPlayerX,
    playerO,
    setPlayerO,
    active, 
    setActive
  };

  return <GameContext.Provider value = {{ ...gameState }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };