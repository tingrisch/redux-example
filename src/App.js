import React, { Component } from 'react';

import styled from "styled-components";

// Components 
import Plus from "./components/Plus";
import Minus from "./components/Minus";
import Counter from "./components/Counter";

const Wrapper = styled.div`
  background-color: #999;
  padding: 1rem;
  margin: auto;
  width: 15%;
  display: flex;
`;

const App = () =>
  <Wrapper>
    <Plus />
    <Counter />
    <Minus />
  </Wrapper>;

export default App;
