import './Board.css';
import { React } from 'react';
import Tile from '../../components/Tile/Tile';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

export default function Board() {
  const { board, setBoard, active, setActive, currentPlayer, setCurrentPlayer } = useContext(GameContext);
  // check for cats game
  if (active && 
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
  
    // conditions for player X to win
  if (board[0].value === 'X' && board[1].value === 'X' && board[2].value === 'X') {
    setActive(false);
    alert('X wins!');
  }
  if (board[3].value === 'X' && board[4].value === 'X' && board[5].value === 'X') {
    setActive(false);
    alert('X wins!');
  }
  if (board[6].value === 'X' && board[7].value === 'X' && board[8].value === 'X') {
    setActive(false);
    alert('X wins!');
  }
  if (board[0].value === 'X' && board[4].value === 'X' && board[8].value === 'X') {
    setActive(false);
    alert('X wins!');
  }
  if (board[6].value === 'X' && board[4].value === 'X' && board[2].value === 'X') {
    setActive(false);
    alert('X wins!');
  }

  // conditions for player O to win
  if (board[0].value === 'O' && board[1].value === 'O' && board[2].value === 'O') {
    setActive(false);
    alert('O wins!');
  }
  if (board[3].value === 'O' && board[4].value === 'O' && board[5].value === 'O') {
    setActive(false);
    alert('O wins!');
  }
  if (board[6].value === 'O' && board[7].value === 'O' && board[8].value === 'O') {
    setActive(false);
    alert('O wins!');
  }
  if (board[0].value === 'O' && board[4].value === 'O' && board[8].value === 'O') {
    setActive(false);
    alert('O wins!');
  }
  if (board[6].value === 'O' && board[4].value === 'O' && board[2].value === 'O') {
    setActive(false);
    alert('O wins!');
  }

  function ResetGame() {
    setActive(true);
    setCurrentPlayer('X');
    setBoard([
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
    ]);
  }

  return (
    <main>
      <div className = "message">WELCOME TO ALCHEMY TIC TAC-O</div>
      <div className = "message">It is {currentPlayer}s turn</div>
      <button onClick={ResetGame}>Reset game</button>
      <div className = "board">
        <div className="row">
          <Tile key={board[0].place} location={0} />
          <Tile key={board[1].place} location={1} />
          <Tile key={board[2].place} location={2} />
        </div>
        <div className="row">
          <Tile key={board[3].place} location={3} />
          <Tile key={board[4].place} location={4} />
          <Tile key={board[5].place} location={5} />
        </div>
        <div className="row">
          <Tile key={board[6].place} location={6} />
          <Tile key={board[7].place} location={7} />
          <Tile key={board[8].place} location={8} />
        </div>
      </div>
    </main>
  );
}
