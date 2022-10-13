import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Tile.css';


export default function Tile({ location }) {
  const { board, setBoard, active, currentPlayer, setCurrentPlayer } = useContext(GameContext);
  
  function handleTileClick() {
    if (!active) {
      return;
    } else {

      setBoard((prevState) => {
        return prevState.map((space)=>{
          if (space.place - 1 === location && space.value === '') {
            if (currentPlayer === 'X') {
              setCurrentPlayer('O');
            } else {
              setCurrentPlayer('X');
            } return { place: location, value: currentPlayer };
          } else {
            return { ...space };
          }
        });
      });

    }
  }


  return (
    <div className= "tile" onClick={handleTileClick}>
      <div>{board[location].value}</div>
    </div>
  );
}