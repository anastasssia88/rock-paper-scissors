import React from "react";
import styled from "styled-components";
import { keyframes } from 'styled-components'

// images
import ScissorsImg from "../images/icon-scissors.svg"
import PaperImg from "../images/icon-paper.svg"
import RockImg from "../images/icon-rock.svg"

interface Props {
    character?: string;
    winner?: string | false;
    children?: React.ReactNode;
  };

const PlayerCoin: React.FC<Props> = ({character, winner}) => {
    if (character === "scissors") {
        return(
            <ScissorsButton winner={winner} character={character}>
                <ImageBox>
                    <img src={ScissorsImg} alt="Scissors coin" />
                </ImageBox>
            </ScissorsButton>
        )
    } else if (character === "paper") {
        return(
            <PaperButton winner={winner} character={character}>
                <ImageBox>
                    <img src={PaperImg} alt="Paper coin" />
                </ImageBox>
            </PaperButton>
        )
    }
    return(
        <RockButton winner={winner} character={character}>
            <ImageBox>
                <img src={RockImg} alt="Rock coin" />
            </ImageBox>
        </RockButton>
    )
}

export default PlayerCoin;

const breatheAnimation = keyframes`
 0% { transform: scale(1); opacity: 1 }
 100% { transform: scale(1.9); opacity: 0.1 }
`

const ChoiceButton = styled.button<Props>`
    border: none;
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;


    &::after {
        content: "";
        width: 28rem;
        height: 28rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        position: absolute;
        z-index: -100;
        animation-name: ${breatheAnimation};
        animation-duration: ${ p => p.character === p.winner && "1s"};
        animation-iteration-count: ${ p => p.character === p.winner && "infinite"};
    }

    &::before {
        content: "";
        width: 22rem;
        height: 22rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        position: absolute;
        z-index: -100;
        animation-name: ${breatheAnimation};
        animation-duration: ${ p => p.character === p.winner && "1.1s"};
        animation-iteration-count: ${ p => p.character === p.winner && "infinite"};
    }
`

const ScissorsButton = styled(ChoiceButton)`
    background-image: ${p => p.theme.gradients.scissors};
    box-shadow: 0 0.7rem 0 ${ p => p.theme.colors.scissors};
`

const PaperButton = styled(ChoiceButton)`
    background-image: ${p => p.theme.gradients.paper};
    box-shadow: 0 0.7rem 0 ${ p => p.theme.colors.paper};

`

const RockButton = styled(ChoiceButton)`
    background-image: ${p => p.theme.gradients.rock};
    box-shadow: 0 0.7rem 0 ${ p => p.theme.colors.rock};
`

const ImageBox = styled.div`
    background: ${p => p.theme.colors.gray};
    box-shadow: inset 0 0.7rem 0 rgba(0, 0, 0, 0.1);
    width: 22.6rem;
    height: 22.6rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
        min-width: 10rem;
        min-height: 10rem;
    }
`