import React, { createContext, useState } from "react";

interface GameContextInterface {
    gameStateKey: [string, (value: string) => void];
    scoreKey: [number, React.Dispatch<React.SetStateAction<number>>];
    openModalKey: [boolean, (value: boolean) => void];
    currCoinKey: [string, (value: string) => void];
    houseCoinKey: [string, (value: string) => void];
    winnerKey: [string, (value: string) => void]
  }


export const GameContext = createContext<GameContextInterface>(undefined!);

export const GameProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [gameState, setGameState] = useState("start");
    const [score, setScore] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [ currCoin, setCurrCoin ] = useState('');
    const [houseCoin, setHouseCoin] = useState('');
    const [winner, setWinner] = useState('');
  
    return (
      <GameContext.Provider
        value={{
            gameStateKey: [gameState, setGameState],
            scoreKey: [score, setScore],
            openModalKey: [openModal, setOpenModal],
            currCoinKey: [currCoin, setCurrCoin],
            houseCoinKey: [houseCoin, setHouseCoin],
            winnerKey: [winner, setWinner]
        }}
      >
        {children}
      </GameContext.Provider>
    );
  };