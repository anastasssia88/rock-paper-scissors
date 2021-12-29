import React, {useContext} from 'react';
import styled from "styled-components";
import { GameContext } from "../context/GameContext"
import OriginalLogo from "../images/logo.svg"
import ScoreBox from "../components/ScoreBox"


const Header: React.FC = () => {
  const keys = useContext(GameContext);
  const [score, setScore] = keys.scoreKey;

  return (
    <StyledDiv>
      <StyledImg src={OriginalLogo} alt="game logo" />
      <ScoreBox score={score} />
    </StyledDiv>
  );
}

export default Header;

const StyledDiv = styled.div`
  width: 100%;
  border: 3px solid ${p => p.theme.colors.headerOutline};
  border-radius: 1.6rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
    align-items: center;
`

const StyledImg = styled.img``