import React, {useContext} from "react";
import styled from "styled-components";
import { GameContext } from "../context/GameContext"



const ScoreBox: React.FC = () => {
    const keys = useContext(GameContext);
    const [score, setScore] = keys.scoreKey;
    const [ houseScore, setHouseScore ] = keys.houseScoreKey;

    return(
        <StyledDiv>
            <span>Score</span>
            <h3>{score}:{houseScore}</h3>
        </StyledDiv>
    )
}

export default ScoreBox;


const StyledDiv = styled.div`
    background: ${ p => p.theme.colors.white};
    width: 20%;
    border-radius: 0.8rem;
    padding: 1.2rem;
    text-align: center;

    & > span {
        display: inline-block;
        text-transform: uppercase;
        color: ${ p => p.theme.colors.textScore};
        letter-spacing: 1.2px;
        font-size: 1.4rem;
    } 

    & > h3 {
        line-height: 1;
        font-size: 6.2rem;
        color: ${ p => p.theme.colors.textDark};
    }
  
`