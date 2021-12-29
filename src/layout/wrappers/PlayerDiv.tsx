import React from "react"
import styled from "styled-components"


const PlayerDiv: React.FC = ({ children }) => {

    return(
        <StyledDiv>
            { children }
        </StyledDiv>
    )
}

export default PlayerDiv;

const StyledDiv = styled.div`
    text-align: center;
    padding: 0 8rem;

    & > h3 {
        text-transform: uppercase;
        letter-spacing: 1.4px;
        font-size: 2.4rem;
        color: ${ p => p.theme.colors.white};
        text-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.2)
    }
`