import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
// import ExecuteMoveButton from '../ExecuteMoveButton/ExecuteMoveButton';
import './Tile.css';

const tileType = {
  circle: 'O',
  ex: 'X',
};


export default function Tile() {
  const { board, setBoard, playerX, setPlayerX, playerO, setPlayerO, active, setActive, currentPlayer, setCurrentPlayer } = useContext(GameContext);
  
  function handleTileClick() {
    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
    console.log('you clicked!');
    console.log('it is now ' + currentPlayer + ' turn');
  }

  return (
    <div className= "tile" onClick={handleTileClick}>
    </div>
  );
}