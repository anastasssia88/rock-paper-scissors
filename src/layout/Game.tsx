import React, {useContext, useState, useEffect} from "react";
import styled from "styled-components";
import { GameContext } from "../context/GameContext"
import PlayerCoin from "../components/PlayerCoin";
import BounceLoader from "react-spinners/BounceLoader";
import { setTimeout } from "timers/promises";

const Game: React.FC = () => {

    // shared game state
    const keys = useContext(GameContext);
    const [ currCoin ] = keys.currCoinKey;
    const [ houseCoin, setHouseCoin ] = keys.houseCoinKey;
    const [ winner, setWinner ] = keys.winnerKey;
    const [gameState, setGameState] = keys.gameStateKey;
    const [ score, setScore ] = keys.scoreKey;


    // local state
    const [ loading, setLoading ] = useState(true);

    const getRandomCoin = () => {
        let randomNum =  Math.floor(Math.random() * 3);
        if(randomNum === 0) {
            setHouseCoin("rock")
        } else if(randomNum === 1) {
            setHouseCoin("scissors")
        } else {
            setHouseCoin("paper")
        }
    }

    const pickWinner = () => {
        if(currCoin === houseCoin) {
            console.log("It's a tie")
            setWinner("none");
            setGameState("result");
        } else if (
            (currCoin === "paper" && houseCoin === "rock") ||
            (currCoin === "rock" && houseCoin === "scissors") || 
            (currCoin === "scissors" && houseCoin === "paper")
        ) {
            console.log(`You win!!! Because ${currCoin} beats ${houseCoin}`)
            setWinner("currCoin");
            setScore( prevState => (prevState + 1));
            setGameState("result");
        } else {
            console.log(`You loose :'(  Because ${houseCoin} beats ${currCoin}`)
            setWinner("houseCoin");
            setGameState("result");
        }
    }

    useEffect(() => {
        getRandomCoin();
    }, [])

    useEffect(() => {
        window.setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [houseCoin])

    useEffect(() => {
        window.setTimeout(() => {
            if(houseCoin) {
                console.log("Picking the winner ...");
                pickWinner();
            }
        }, 1000)
    }, [loading])

    return(
        <StyledSection>
            <PlayerDiv>
                <h3>You picked</h3>
                <CoinWrapper>
                    <PlayerCoin character={currCoin} />
                </CoinWrapper>
            </PlayerDiv>
            <PlayerDiv>
                <h3>The house picked</h3>
                <CoinWrapper>
                    { loading ? (
                        <span><BounceLoader color={"hsl(229, 64%, 46%)"}/></span>
                        ) : (
                            <span><PlayerCoin character={houseCoin} /></span> 
                        )}
                     
                </CoinWrapper>
            </PlayerDiv>
        </StyledSection>
    )
}

export default Game;

const StyledSection = styled.section`
    padding: 0 20%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
`

const PlayerDiv = styled.div`
    text-align: center;
    width: 100%;

    & > h3 {
        text-transform: uppercase;
        letter-spacing: 1.4px;
        font-size: 2.4rem;
        color: ${ p => p.theme.colors.white};
        text-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.2)
    }
`

const CoinWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 7rem 0;

    & > span {
        width: 30rem;
        height: 30rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        display: flex;
        justify-content:center;
        align-items: center;
    }
`