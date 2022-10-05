import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Tile.css';


export default function Tile({ location }) {
  const { board, active, currentPlayer, setCurrentPlayer } = useContext(GameContext);
  
  function handleTileClick() {
    if (!active) {
      return;
    } else {
      board[location].value = currentPlayer;
      if (currentPlayer === 'X') {
        setCurrentPlayer('O');
      } else {
        setCurrentPlayer('X');
      }
    }
  }


  return (
    <div className= "tile" onClick={handleTileClick}>
      <div>{board[location].value}</div>
    </div>
  );
}