import React from "react";
import styled from "styled-components";
// import {StartDiv} from "../layout/Start"

// images
import ScissorsImg from "../images/icon-scissors.svg"
import PaperImg from "../images/icon-paper.svg"
import RockImg from "../images/icon-rock.svg"

interface Props {
    character: "scissors" | "paper" | "rock";
  };


const ChoiceCoin: React.FC<Props> = ({character}) => {

    if(character === "scissors") {
        return (
        <Scissors >
            <ImageBox>
                <img src={ScissorsImg} alt="Scissors coin" />
            </ImageBox>
        </Scissors>
    )
    }

    if (character === "paper") {
        return  (
            <Paper>
                <ImageBox>
                    <img src={PaperImg} alt="Paper coin" />
                </ImageBox>
            </Paper>
        )
    }
 
    return(
        <Rock>
            <ImageBox>
                <img src={RockImg} alt="Rock coin" />
            </ImageBox>
        </Rock>
    )
}

export default ChoiceCoin;


const Base = styled.button`
    border: none;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: transform 0.2s;

    main > div > & {
        position: absolute;
    } 

    &:hover {
        transform: translateY(-0.8rem) scale(1.04);
    }

    &:active {
        cursor: pointer;
        transform: translateY(-0.3rem) scale(1.04);
    }
    

    
  `

const Scissors = styled(Base)`
    background-image: ${p => p.theme.gradients.scissors};
    box-shadow: 0 0.7rem 0 ${ p => p.theme.colors.scissors};

    main > div > & {
        top: 7.5rem;
        right: 22rem;
    } 
`

const Paper = styled(Base)`
    background-image: ${p => p.theme.gradients.paper};
    box-shadow: 0 0.7rem 0 ${ p => p.theme.colors.paper};
    main > div > & {
        top: 7.5rem;
        left: 22rem;
    } 
`

const Rock = styled(Base)`
    background-image: ${p => p.theme.gradients.rock};
    box-shadow: 0 0.7rem 0 ${ p => p.theme.colors.rock};
    main > div > & {
        bottom: 12rem;
    } 
`


const ImageBox = styled.div`
    background: ${p => p.theme.colors.gray};
    box-shadow: inset 0 0.7rem 0 rgba(0, 0, 0, 0.1);
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
        width: 6rem;
        height: 6rem;
    }
`