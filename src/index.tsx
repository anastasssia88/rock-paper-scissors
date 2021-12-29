import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from "./theme/globalStyle";
import {GameProvider} from "./context/GameContext"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

