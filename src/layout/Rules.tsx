import React from "react";
import styled from "styled-components";
import imageRules from "../images/image-rules.svg"
import iconClose from "../images/icon-close.svg"


interface Props {
    openModal: boolean;
    handleRulesModal?: () => void;
}

const Rules: React.FC<Props> = ({openModal, handleRulesModal}) => {
    return(
        <StyledModal openModal={openModal} handleRulesModal={handleRulesModal}>
            <Container openModal={openModal} >
                <div>
                    <h3>Rules</h3>
                    <button onClick={handleRulesModal}><img src={iconClose} alt="close rules modal" /></button>
                </div>
                <div>
                    <img src={imageRules} alt="rules" />
                </div>
            </Container>
        </StyledModal>
    )
}

export default Rules;

const StyledModal = styled.div<Props>`
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;

    opacity: 1;
    visibility: visible;
    

    opacity: ${ p => p.openModal === false && "0"};
    visibility: ${ p => p.openModal === false && "hidden"};
    transition: all 0.6s;
    
`

const Container = styled.div<Props>`
    background: ${ p => p.theme.colors.white};
    border-radius: 4px;
    min-width: 30rem;
    min-height: 30rem;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 3rem 5rem;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.5);

    transform: translate(-50%, -50%) scale(1);
    transform: ${ p => p.openModal === false && "translate(-50%, -10%) scale(0.9)"};
    transition: all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    

    & > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > h3 {
            font-size: 3.2rem;
            text-transform: uppercase;
            color: ${ p => p.theme.colors.textDark };
        }

        & > button {
            border: none;
            background: transparent;
            cursor: pointer;
        }
    }

    & > div:last-child {
        padding-top: 5rem;
    }
`