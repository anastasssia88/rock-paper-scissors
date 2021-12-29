import React, { useContext } from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from './theme/theme'

// context
import { GameContext } from "./context/GameContext"

// components
import Button from './components/Button';
import Header from './layout/Header'
import Start from './layout/Start'
import Game from './layout/Game'

// import Winner from './layout/Winner';
// import Rules from './layout/Rules';

const App: React.FC = () => {
  const keys = useContext(GameContext);

  const [gameState, setGameState] = keys.gameStateKey;
  const [score, setScore] = keys.scoreKey;
  const [openModal, setOpenModal] = keys.openModalKey;
  const [ currCoin, setCurrCoin ] = keys.currCoinKey;

  const openRulesModal = () => {
    setOpenModal(true);
  }

  const changeGameState = (newState: string) => {
    setGameState(newState);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        {
          gameState === "start" && <Start />
        }
        {
          gameState === "game" && <Game />
        }
        
      </main>
      <Button secondary content="Rules" openModal={openRulesModal}/>
    </ThemeProvider>
  );
}

export default App;
