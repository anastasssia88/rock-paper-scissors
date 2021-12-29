import React, {useContext, useState, useEffect} from "react";
import styled from "styled-components";
import { GameContext } from "../context/GameContext"
import PlayerCoin from "../components/PlayerCoin";
import BounceLoader from "react-spinners/BounceLoader";
import { setTimeout } from "timers/promises";

const Game: React.FC = () => {
    const keys = useContext(GameContext);
    const [ currCoin ] = keys.currCoinKey;

    const [loading, setLoading] = useState(true);
    const [houseCoin, setHouseCoin] = useState("");

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
    useEffect(() => {
        getRandomCoin();
    }, [])

    useEffect(() => {
        window.setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [houseCoin])

    return(
        <StyledDiv>
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
        </StyledDiv>
    )
}

export default Game;

const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 4rem 1.5rem;
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

    &:first-child {
        /* background: orangered; */
    }

    &:last-child {
        /* background: blue; */
    }
`

const CoinWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 5rem 0;

    & > span {
        width: 24rem;
        height: 24rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        display: flex;
        justify-content:center;
        align-items: center;
    }
`