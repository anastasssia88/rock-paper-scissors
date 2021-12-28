import React from "react";
import styled from "styled-components";
import bgTriangle from "../images/bg-triangle.svg"
import ChoiceCoin from '../components/ChoiceCoin';

interface Props {
    gameState: string;
    currCoin: string;
};

const Game: React.FC<Props> = ({gameState, currCoin}) => {
    return(
        <StartDiv>
            <ChoiceCoin character="scissors" />
            <ChoiceCoin character="paper" />
            <ChoiceCoin character="rock" />
        </StartDiv>
    )
}

export default Game;


const StartDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;

    background:url(${bgTriangle}) no-repeat center;
    object-fit: fill;
    position: relative;
`
