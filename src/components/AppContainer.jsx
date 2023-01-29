import React from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
    width: 100%;
    height: 100vh;
    gap: 1em;
    
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export default function AppContainer({ children }) {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    );
}