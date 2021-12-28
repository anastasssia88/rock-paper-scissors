import React from "react";
import styled from "styled-components";

interface Props {
    score: number;
  };

const ScoreBox: React.FC<Props> = ({ score }) => {
    return(
        <StyledDiv>
            <span>Score</span>
            <h3>{score}</h3>
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