import styled from "styled-components";

export const PostDetailPageSection = styled.div`
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

export const Author = styled.div`
    border: 2px solid red;
    border-radius: 4px;
    max-width: 35rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    background-color: red;
`;

export const Category = styled(Author)`
    border: 2px solid green;
    background-color: green;

`;

export const MetaData = styled(Author)`
    border: 2px solid blue;
    background-color: blue;
`;
