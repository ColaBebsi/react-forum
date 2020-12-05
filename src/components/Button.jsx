import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
   display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: #000000;
  border: 2px solid #000000;

`;

export const Button = (props) => {
return <StyledButton>{props.text}</StyledButton>;
};
