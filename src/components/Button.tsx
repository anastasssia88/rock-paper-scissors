import React from "react";
import styled from "styled-components";

interface Props {
    primary?: boolean;
    secondary?: boolean;
    content?: string;
    openModal?: () => void;
  };


const Button: React.FC<Props> = ({primary, secondary, content, openModal}) => {

  if(primary) {
    return(
      <Primary>
          {content}
      </Primary>
    )
  }
    return(
        <Secondary onClick={openModal}>
          {content}
        </Secondary>
    )
}

export default Button;


const Base = styled.button`
  border: none;
  padding: 1rem 3rem;
  border-radius: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  cursor: pointer;
  transition: all 0.3s;
`

const Primary = styled(Base)`
`

const Secondary = styled(Base)`
  position: absolute;
  bottom: 5rem;
  right: 20%;
  color: ${ p => p.theme.colors.gray };
  border: 2px solid ${ p => p.theme.colors.headerOutline};
  background: transparent;
`

