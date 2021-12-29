import { useContext } from "react";
import { GameContext } from "../context/GameContext"


export const useGameState = (newGameState: string, newCurrCoin: string) => {
    const keys = useContext(GameContext);
    const [ gameState, setGameState ] = keys.gameStateKey;
    const [ currCoin, setCurrCoin ] = keys.currCoinKey;

    setGameState(newGameState);
    setCurrCoin(newCurrCoin);

    console.log("in useGameState");
}