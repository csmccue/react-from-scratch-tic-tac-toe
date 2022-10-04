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
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div className="row">
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div className="row">
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>
    </main>
  );
}
