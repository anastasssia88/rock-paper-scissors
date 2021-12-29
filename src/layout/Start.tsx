import React, { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../context/GameContext"

import bgTriangle from "../images/bg-triangle.svg"
import ChoiceCoin from '../components/ChoiceCoin';


const Start: React.FC = () => {
    const keys = useContext(GameContext);
    const [ gameState, setGameState ] = keys.gameStateKey;
    const [ currCoin, setCurrCoin ] = keys.currCoinKey;

    return(
        <StyledSection>
            <div>
                <ChoiceCoin 
                    character="scissors" 
                />
                <ChoiceCoin 
                    character="paper" 
                />
                <ChoiceCoin 
                    character="rock" 
                />
            </div>
        </StyledSection>
    )
}

export default Start;


const StyledSection = styled.section`
    padding: 5rem 20%;
    height: 100%;

    & > div {
        height: 100%;
        
        padding: 1.2rem;
        display: flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;

        background:url(${bgTriangle}) no-repeat center;
        object-fit: fill;
        position: relative;
    }
`

