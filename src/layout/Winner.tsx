import React, {useContext} from "react";
import styled from "styled-components";
import { keyframes } from 'styled-components'

// shared state 
import { GameContext } from "../context/GameContext"

// ui components
import PlayerCoin from "../components/PlayerCoin";
import Button from "../components/Button";
import CoinWrapper from "./wrappers/CoinWrapper";
import PlayerDiv from "./wrappers/PlayerDiv";


const Winner: React.FC = () => {
    // shared game state
    const keys = useContext(GameContext);
    const [ currCoin, setCurrCoin ] = keys.currCoinKey;
    const [ houseCoin, setHouseCoin ] = keys.houseCoinKey;
    const [ winner, setWinner ] = keys.winnerKey;
    const [gameState, setGameState] = keys.gameStateKey;

    const restartGame = () => {
        setGameState("start");
        setWinner('');
        setHouseCoin('');
        setCurrCoin('');
    }

    return(
        <StyledSection>
            <PlayerDiv>
                <h3>You picked</h3>
                <CoinWrapper>
                    <PlayerCoin character={currCoin} winner={winner === "currCoin" && currCoin}/>
                </CoinWrapper>
            </PlayerDiv>

            <ResultDiv>
                <h3>
                    {winner === "none" ? "It's a tie" : (winner === "currCoin" ? "You win" : "You lose")}
                </h3>
                <Button primary content="Play again" handleGameState={restartGame}/>
                
            </ResultDiv>

            <PlayerDiv>
                <h3>The house picked</h3>
                <CoinWrapper>
                    <PlayerCoin character={houseCoin} winner={winner === "houseCoin" && houseCoin}/> 
                </CoinWrapper>
            </PlayerDiv>
        </StyledSection>
    )
}

export default Winner;

const StyledSection = styled.section`
    padding: 0 5%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
`

// const PlayerDiv = styled.div`
//     text-align: center;
//     padding: 0 8rem;

//     & > h3 {
//         text-transform: uppercase;
//         letter-spacing: 1.4px;
//         font-size: 2.4rem;
//         color: ${ p => p.theme.colors.white};
//         text-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.2)
//     }
// `

// const breatheAnimation = keyframes`
//  0% { transform: scale(1); opacity: 1 }
//  100% { transform: scale(1.9); opacity: 0.1 }
// `

// const CoinWrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content:center;
//     align-items: center;
//     padding: 7rem 0;
// `

const ResultDiv = styled.div`
     width: auto;
     text-align: center;
     padding: 0;

     & > h3 {
         color: ${ p => p.theme.colors.white};
         font-size: 5.4rem;
         text-transform: uppercase;
         letter-spacing: 1.8px;
         margin-bottom: 1.6rem;
     }
`