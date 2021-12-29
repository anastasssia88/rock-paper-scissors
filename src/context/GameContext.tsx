import React, { createContext, useState } from "react";

interface GameContextInterface {
    gameStateKey: [string, (value: string) => void];
    scoreKey: [number, (value: number) => void];
    openModalKey: [boolean, (value: boolean) => void];
    currCoinKey: [string, (value: string) => void];
  }


export const GameContext = createContext<GameContextInterface>(undefined!);

export const GameProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [gameState, setGameState] = useState("start");
    const [score, setScore] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [ currCoin, setCurrCoin ] = useState('');
  
    return (
      <GameContext.Provider
        value={{
            gameStateKey: [gameState, setGameState],
            scoreKey: [score, setScore],
            openModalKey: [openModal, setOpenModal],
            currCoinKey: [currCoin, setCurrCoin]
        }}
      >
        {children}
      </GameContext.Provider>
    );
  };