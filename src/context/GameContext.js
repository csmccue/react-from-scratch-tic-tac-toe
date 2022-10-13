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

  const checkWinner = () => {
    if (!active)
      return;
    // conditions for player X to win

    if (board[0].value === 'X' && board[1].value === 'X' && board[2].value === 'X') {
      setActive(false);
      alert('X wins!');
      return;
    }
    if (board[3].value === 'X' && board[4].value === 'X' && board[5].value === 'X') {
      setActive(false);
      alert('X wins!');
      return;
    }
    if (board[6].value === 'X' && board[7].value === 'X' && board[8].value === 'X') {
      setActive(false);
      alert('X wins!');
      return;
    }
    if (board[0].value === 'X' && board[4].value === 'X' && board[8].value === 'X') {
      setActive(false);
      alert('X wins!');
      return;
    }
    if (board[6].value === 'X' && board[4].value === 'X' && board[2].value === 'X') {
      setActive(false);
      alert('X wins!');
      return;
    }
    if (board[0].value === 'X' && board[3].value === 'X' && board[6].value === 'X') {
      setActive(false);
      alert('X wins!');
      return;
    }
    if (board[1].value === 'X' && board[4].value === 'X' && board[7].value === 'X') {
      setActive(false);
      alert('X wins!');
      return;
    }
    if (board[2].value === 'X' && board[5].value === 'X' && board[8].value === 'X') {
      setActive(false);
      alert('X wins!');
      return;
    }
  
    // conditions for player O to win
    if (board[0].value === 'O' && board[1].value === 'O' && board[2].value === 'O') {
      setActive(false);
      alert('O wins!');
      return;
    }
    if (board[3].value === 'O' && board[4].value === 'O' && board[5].value === 'O') {
      setActive(false);
      alert('O wins!');
      return;
    }
    if (board[6].value === 'O' && board[7].value === 'O' && board[8].value === 'O') {
      setActive(false);
      alert('O wins!');
      return;
    }
    if (board[0].value === 'O' && board[4].value === 'O' && board[8].value === 'O') {
      setActive(false);
      alert('O wins!');
      return;
    }
    if (board[6].value === 'O' && board[4].value === 'O' && board[2].value === 'O') {
      setActive(false);
      alert('O wins!');
      return;
    }
    if (board[0].value === 'O' && board[3].value === 'O' && board[6].value === 'O') {
      setActive(false);
      alert('X wins!');
      return;
    }
    if (board[1].value === 'O' && board[4].value === 'O' && board[7].value === 'O') {
      setActive(false);
      alert('X wins!');
      return;
    }
    if (board[2].value === 'O' && board[5].value === 'O' && board[8].value === 'O') {
      setActive(false);
      alert('X wins!');
      return;
    }
    // check for cats game
    else if (active && 
      board[0].value && 
      board[1].value &&
      board[2].value &&
      board[3].value &&
      board[4].value && 
      board[5].value &&
      board[6].value &&
      board[7].value &&
      board[8].value) {
      setActive(false);
      alert('cats game!');
    }
  };
  checkWinner();


  return <GameContext.Provider value = {{ ...gameState }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };