import React from "react";
import styled from "styled-components";
// images
import ScissorsImg from "../images/icon-scissors.svg"
import PaperImg from "../images/icon-paper.svg"
import RockImg from "../images/icon-rock.svg"

interface Props {
    character?: string;
    children?: React.ReactNode;
  };

const PlayerCoin: React.FC<Props> = ({character}) => {
    if (character === "scissors") {
        return(
            <ScissorsButton >
                <ImageBox>
                    <img src={ScissorsImg} alt="Scissors coin" />
                </ImageBox>
            </ScissorsButton>
        )
    } else if (character === "paper") {
        return(
            <PaperButton >
                <ImageBox>
                    <img src={PaperImg} alt="Paper coin" />
                </ImageBox>
            </PaperButton>
        )
    }
    return(
        <RockButton >
            <ImageBox>
                <img src={RockImg} alt="Rock coin" />
            </ImageBox>
        </RockButton>
    )
}

export default PlayerCoin;


const ChoiceButton = styled.button`
    border: none;
    width: 24rem;
    height: 24rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
`

const ScissorsButton = styled(ChoiceButton)`
    background-image: ${p => p.theme.gradients.scissors};
    box-shadow: 0 0.7rem 0 ${ p => p.theme.colors.scissors};

    top: 7.5rem;
    right: 22rem;
`

const PaperButton = styled(ChoiceButton)`
    background-image: ${p => p.theme.gradients.paper};
    box-shadow: 0 0.7rem 0 ${ p => p.theme.colors.paper};
    top: 7.5rem;
    left: 22rem; 
`

const RockButton = styled(ChoiceButton)`
    background-image: ${p => p.theme.gradients.rock};
    box-shadow: 0 0.7rem 0 ${ p => p.theme.colors.rock};
    bottom: 12rem;
`

const ImageBox = styled.div`
    background: ${p => p.theme.colors.gray};
    box-shadow: inset 0 0.7rem 0 rgba(0, 0, 0, 0.1);
    width: 17rem;
    height: 17rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
        min-width: 8rem;
        min-height: 8rem;
    }
`