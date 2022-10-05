import { createContext, useState } from 'react';
import initialBoard from '../initial-board-data';
const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [playerX, setPlayerX] = useState();
  const [playerO, setPlayerO] = useState();
  const [tile, setTile] = useState();
  const [active, setActive] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState('X');

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
    setActive,
    currentPlayer,
    setCurrentPlayer
  };

  return <GameContext.Provider value = {{ ...gameState }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };