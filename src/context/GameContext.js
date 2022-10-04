import { createContext, useState } from 'react';

const GameContext = createContext();

// const initialBoardArray = 
//   [['1', '2', '3'], 
//     ['4', '5', '6'], 
//     ['7', '8', '9']];

const initialBoardObject = [
  {
    place: 1,
    value: ''
  },
  {
    place: 2,
    value: ''
  },
  {
    place: 3,
    value: ''
  },
  {
    place: 4,
    value: ''
  },
  {
    place: 5,
    value: ''
  },
  {
    place: 6,
    value: ''
  },
  {
    place: 7,
    value: ''
  },
  {
    place: 8,
    value: ''
  },
  {
    place: 9,
    value: ''
  }
];

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoardObject);
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