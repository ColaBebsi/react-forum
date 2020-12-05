import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    color: red;
`;

export const Header = props => {
    return (
        <StyledHeader>
            <h1>{props.title}</h1>
            <h3>{props.status}</h3>
        </StyledHeader>
    );
};
