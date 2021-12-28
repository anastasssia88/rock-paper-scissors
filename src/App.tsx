import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from './theme/theme'

// components
import Button from './components/Button';
import Header from './layout/Header'
import Game from './layout/Game';
// import Winner from './layout/Winner';
// import Rules from './layout/Rules';

const App: React.FC = () => {
  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [ currCoin, setCurrCoin ] = useState('');

  const openRulesModal = () => {
    setOpenModal(true);
  }

  const changeGameState = (newState: string) => {
    setGameState(newState);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Header score={score} />
      <main>
        <Game gameState={gameState} currCoin={currCoin}/>
      </main>
      <Button secondary content="Rules" openModal={openRulesModal}/>
    </ThemeProvider>
  );
}

export default App;
