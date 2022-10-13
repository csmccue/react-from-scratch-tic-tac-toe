import './Board.css';
import { React } from 'react';
import Tile from '../../components/Tile/Tile';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

export default function Board() {
  const { board, setBoard, setActive, currentPlayer, setCurrentPlayer } = useContext(GameContext);

  function ResetGame() {
    setActive(true);
    setCurrentPlayer('X');
    setBoard([
      {
        place: 0,
        value: ''
      },
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
      }
    ]);
  }
  console.log(board);
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
