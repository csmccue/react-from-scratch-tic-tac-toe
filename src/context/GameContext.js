import { createContext, useState } from 'react';

const GameContext = createContext();

// const initialBoardArray = 
//   [['1', '2', '3'], 
//     ['4', '5', '6'], 
//     ['7', '8', '9']];

const initialBoardObject = [
  {
    place: 1,
    value: '1'
  },
  {
    place: 2,
    value: '2'
  },
  {
    place: 3,
    value: '3'
  },
  {
    place: 4,
    value: '4'
  },
  {
    place: 5,
    value: '5'
  },
  {
    place: 6,
    value: '6'
  },
  {
    place: 7,
    value: '7'
  },
  {
    place: 8,
    value: '8'
  },
  {
    place: 9,
    value: '9'
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