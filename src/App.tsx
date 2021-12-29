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
import Winner from './layout/Winner'
import Rules from './layout/Rules';

const App: React.FC = () => {
  const keys = useContext(GameContext);

  const [gameState, setGameState] = keys.gameStateKey;
  const [score, setScore] = keys.scoreKey;
  const [openModal, setOpenModal] = keys.openModalKey;
  const [ currCoin, setCurrCoin ] = keys.currCoinKey;

  const handleRulesModal = () => {
    setOpenModal(!openModal);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Rules openModal={openModal} handleRulesModal={handleRulesModal}/>
      <Header />
      <main>
        {
          gameState === "start" && <Start />
        }
        {
          gameState === "game" && <Game />
        }
        {
          gameState === "result" && <Winner />
        }
      </main>
      <Button secondary content="Rules" handleGameState={handleRulesModal}/>
    </ThemeProvider>
  );
}

export default App;
