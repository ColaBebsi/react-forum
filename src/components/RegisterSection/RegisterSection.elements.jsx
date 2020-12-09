import styled from "styled-components";

export const RegisterPageSection = styled.div`
    color: #fff;
    padding: 5rem 0;
    display: flex;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    padding-bottom: 20px;
`;

export const Status = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 1.5rem;
`;

export const RegisterForm = styled.form`
    display: flex;
    background-color: tomato;
    max-width: 35rem;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem 1rem;
    border-radius: 4px;
`;

export const Select = styled.select`
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
