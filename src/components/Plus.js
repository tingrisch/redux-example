import React from "react";
import styled from "styled-components"

const PlusButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;

`;

const Plus = () =>
    <PlusButton>+</PlusButton>;

export default Plus;
