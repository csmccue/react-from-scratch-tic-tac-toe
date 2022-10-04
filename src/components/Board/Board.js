import './Board.css';
import React from 'react';
import Tile from '../../components/Tile/Tile';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

export default function Board() {

  const { board, setBoard, playerX, setPlayerX, playerO, setPlayerO, active, setActive, currentPlayer, setCurrentPlayer } = useContext(GameContext);

  return (
    <main>
      <div className = "message">WELCOME TO ALCHEMY TIC TAC-O</div>
      <div className = "message">It is {currentPlayer}s turn</div>
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
