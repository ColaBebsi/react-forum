import styled from "styled-components";
import { LoginForm } from "../LoginSection/LoginSection.elements";

export const PostCreatePageSection = styled.div`
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

export const CreatePostForm = styled(LoginForm)`
    background-color: salmon;
`;

export const Status = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 1.5rem;
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
