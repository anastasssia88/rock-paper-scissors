import React from 'react';
import styled from "styled-components";
import OriginalLogo from "../images/logo.svg"
import ScoreBox from "../components/ScoreBox"


const Header: React.FC = () => {
  

  return (
    <StyledSection>
      <div>
      <StyledImg src={OriginalLogo} alt="game logo" />
      <ScoreBox />
      </div>
      
    </StyledSection>
  );
}

export default Header;

const StyledSection = styled.section`
  width: 100%;
  padding: 0 20%;
  padding-top: 5rem;
  
  & > div {
    width: 100%;
    border: 3px solid ${p => p.theme.colors.headerOutline};
    border-radius: 1.6rem;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const StyledImg = styled.img``