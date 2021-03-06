import React from "react";
import styled from "styled-components";

// images
import ScissorsImg from "../images/icon-scissors.svg"
import PaperImg from "../images/icon-paper.svg"
import RockImg from "../images/icon-rock.svg"

interface Props {
    character?: string;
    children?: React.ReactNode;
    coinChoiceHandler: (coin: string) => void;
  };

interface StyledProps {
    character?: string;
    children?: React.ReactNode;
};


const ChoiceCoin: React.FC<Props> = ({character, coinChoiceHandler}) => {

    if (character === "scissors") {
        return(
            <Scissors>
                <button onClick={() => coinChoiceHandler("scissors")}>
                    <ImageBox>
                        <img src={ScissorsImg} alt="Scissors coin" />
                    </ImageBox>
                </button>
            </Scissors>
        )
    } else if (character === "paper") {
        return(
            <Paper>
                <button onClick={() => coinChoiceHandler("paper")}>
                    <ImageBox>
                        <img src={PaperImg} alt="Paper coin" />
                    </ImageBox>
                </button>
            </Paper>
        )
    }
    return(
            <Rock>
                <button onClick={() => coinChoiceHandler("rock")}>
                    <ImageBox>
                        <img src={RockImg} alt="Rock coin" />
                    </ImageBox>
                </button>
            </Rock>
    )
}

export default ChoiceCoin;


const ChoiceButton = styled.div<StyledProps>`
    
    border-radius: 50%;
    transition: transform 0.2s;
    position:absolute;

    & > button {
        border: none;
        background: transparent;
        border-radius: 50%;
        width: 18rem;
        height: 18rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

    }

    &:hover {
        transform: translateY(-0.8rem) scale(1.04);
    }
    &:active {
        transform: translateY(-0.3rem) scale(1.04);
    }

`

const Scissors = styled(ChoiceButton)`
    background-image: ${p => p.theme.gradients.scissors};
    box-shadow: 0 0.7rem 0 ${ p => p.theme.colors.scissors};

    top: 2.8rem;
    right: 22rem;
`

const Paper = styled(ChoiceButton)`
    background-image: ${p => p.theme.gradients.paper};
    box-shadow: 0 0.7rem 0 ${ p => p.theme.colors.paper};
    top: 2.8rem;
    left: 22rem; 
`

const Rock = styled(ChoiceButton)`
    background-image: ${p => p.theme.gradients.rock};
    box-shadow: 0 0.7rem 0 ${ p => p.theme.colors.rock};
    bottom: 8rem;
`

const ImageBox = styled.div<StyledProps>`
    background: ${p => p.theme.colors.gray};
    box-shadow: inset 0 0.7rem 0 rgba(0, 0, 0, 0.1);
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
        min-width: 6rem;
        min-height: 6rem;
    }
`