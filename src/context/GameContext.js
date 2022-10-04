import { createContext, useState } from 'react';

const GameContext = createContext();

const initialBoard = 
  [['1', '2', '3'], 
    ['4', '5', '6'], 
    ['7', '8', '9']];

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