import React from "react"
import styled from "styled-components"


const CoinWrapper: React.FC = ({ children }) => {

    return(
        <StyledWrapper>
            { children }
        </StyledWrapper>
    )
}

export default CoinWrapper;

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 7rem 0;

    & > span {
        width: 30rem;
        height: 30rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    
`