import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const gameState = {

  };

  return <GameContext.Provider value = {{ ...gameState }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };