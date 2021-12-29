import React, {useContext, useState, useEffect} from "react";
import styled from "styled-components";
import { GameContext } from "../context/GameContext"
import BounceLoader from "react-spinners/BounceLoader";

// ui components
import PlayerCoin from "../components/PlayerCoin";
import CoinWrapper from "./wrappers/CoinWrapper";
import PlayerDiv from "./wrappers/PlayerDiv";



const Game: React.FC = () => {

    // shared game state
    const keys = useContext(GameContext);
    const [ currCoin ] = keys.currCoinKey;
    const [ houseCoin, setHouseCoin ] = keys.houseCoinKey;
    const [ winner, setWinner ] = keys.winnerKey;
    const [gameState, setGameState] = keys.gameStateKey;
    const [ score, setScore ] = keys.scoreKey;
    const [ houseScore, setHouseScore ] = keys.houseScoreKey;


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
            setScore(prevState => (prevState + 1));
            setGameState("result");
        } else {
            console.log(`You loose :'(  Because ${houseCoin} beats ${currCoin}`)
            setWinner("houseCoin");
            setHouseScore(prevState => (prevState + 1))
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