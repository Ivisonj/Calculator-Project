import styled from "styled-components";

export const ButtonContainer = styled.button `
    padding: 10px;
    background-color: ${prop => prop.buttonColor || "#1C1C1C"};
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    flex: 1; 

    &:hover {
        opacity: 0.6;
    }
`