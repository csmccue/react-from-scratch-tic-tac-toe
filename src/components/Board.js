import React from 'react';
import Tile from './Tile';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

export default function Board() {
  const { board, setBoard, tile, setTile } = useContext(GameContext);
  return (
    <div className = "board">
      <Tile>1</Tile>
      <Tile>2</Tile>
      <Tile>3</Tile>
      <Tile>4</Tile>
      <Tile>5</Tile>
      <Tile>6</Tile>
      <Tile>7</Tile>
      <Tile>8</Tile>
      <Tile>9</Tile>
    </div>
  );
}
