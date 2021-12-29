import React from "react";
import styled from "styled-components";

interface Props {
    primary?: boolean;
    secondary?: boolean;
    content?: string;
    handleGameState: () => void;
  };


const Button: React.FC<Props> = ({primary, secondary, content, handleGameState}) => {

  if(primary) {
    return(
      <Primary onClick={handleGameState}>
          {content}
      </Primary>
    )
  }
    return(
        <Secondary onClick={handleGameState}>
          {content}
        </Secondary>
    )
}

export default Button;


const Base = styled.button`
  border: none;
  padding: 1rem 3rem;
  border-radius: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s;

  &:hover {
        transform: translateY(-0.8rem) scale(1.04);
        box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.2)
  }
  &:active {
      transform: translateY(-0.3rem) scale(1.04);
      box-shadow: 0 1.6rem 2.6rem rgba(0, 0, 0, 0.3)
  }

`

const Primary = styled(Base)`
  width: 100%;
  padding: 1.6rem;

  &:hover {
        color: hsl(349, 70%, 56%);
  }
  
`

const Secondary = styled(Base)`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  color: ${ p => p.theme.colors.gray };
  border: 2px solid ${ p => p.theme.colors.headerOutline};
  background: transparent;

  &:hover {
    color: ${ p => p.theme.colors.textScore };
    background: ${ p => p.theme.colors.gray };
    border-color: ${ p => p.theme.colors.gray };
  }
`

