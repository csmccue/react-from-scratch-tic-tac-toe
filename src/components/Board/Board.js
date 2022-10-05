import './Board.css';
import { React, useState } from 'react';
import Tile from '../../components/Tile/Tile';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import initialBoard from '../../initial-board-data';

export default function Board() {
  const { board, setBoard, playerX, setPlayerX, playerO, setPlayerO, active, setActive, currentPlayer, setCurrentPlayer } = useContext(GameContext);
  
  if (board[0].value === 'X' && board[1].value === 'X' && board[2].value === 'X') {
    setActive(false);
    console.log('X wins!');
  }

  function ResetGame() {
    setBoard(initialBoard);
    console.log(board);
    console.log('you pressed reset game');
  }

  return (
    <main>
      <div className = "message">WELCOME TO ALCHEMY TIC TAC-O</div>
      <div className = "message">It is {currentPlayer}s turn</div>
      <button onClick={ResetGame}>reset game</button>
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
