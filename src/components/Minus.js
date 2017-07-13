import React from "react";
import styled from "styled-components";

const MinusButton = styled.button`
    background-color: red; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;

const Minus = () => 
    <MinusButton>-</MinusButton>;

export default Minus;