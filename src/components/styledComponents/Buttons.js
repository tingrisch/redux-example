import React from "react";
import styled from "styled-components"

const Button = styled.button`
    background-color: yellow;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
`;

const PlusButton = styled(Button)`
    background-color: green;
`;

const MinusButton = styled(Button)`
    background-color: red;
`;

export { PlusButton, MinusButton };