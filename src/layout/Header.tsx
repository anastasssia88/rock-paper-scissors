import React from 'react';
import styled from "styled-components";

// images
import OriginalLogo from "../images/logo.svg"

// components
import ScoreBox from "../components/ScoreBox"

interface Props {
  score: number;
};

const Header: React.FC<Props> = ({ score }) => {
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