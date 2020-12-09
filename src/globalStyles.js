import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro", sans-serif;
 
}`;

export const ThemeColor = createGlobalStyle`
    body {
        background-color: ${({ darkBg }) => (darkBg ? "#14213d" : "#fff")}
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? "#4b56f7" : "#0467fb")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({ primary }) => (primary ? "#0467fb" : "#4b56f7")};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export const Input = styled.input`
  border-radius: 1rem;
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: none;
  margin-top: 10px;
  margin-bottom: 20px;

  &:focus {
    background-color: #eee;
  }
`;



export default GlobalStyles;
