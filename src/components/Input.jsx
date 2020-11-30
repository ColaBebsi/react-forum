import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 1rem;
`;

export const Input = ({ ...props }) => {
  return (
    <>
      <StyledInput {...props} />
    </>
  );
};
