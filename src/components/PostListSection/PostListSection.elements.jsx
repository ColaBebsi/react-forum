import { Link } from "react-router-dom";
import styled from "styled-components";

import { CgDetailsMore } from "react-icons/cg";

export const PostListPageSection = styled.div`
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

export const CreateLink = styled(Link)`
    display: flex;
    justify-content: center;
    color: red; 
    text-decoration: none;

    &:hover {
    color:tomato;
    text-decoration:underline;
}
`;

export const Table = styled.table`
    /* border-collapse: collapse; */
    /* border-spacing: 0; */
    border: none;
    border-radius: 4px;
    width: 100%;
    max-width: 35rem;
    background-color: #fff;
    color: #000;
    margin: 0 auto;
    padding: 0;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

export const TableHead = styled.th`
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
`;

export const TableData = styled.td`
    text-align: center;
    padding: 0.5rem;

    &:hover {
        background-color: #e5e5e5;
    }
`;

export const TableIcon = styled(CgDetailsMore)`
    color: #000;
    cursor: pointer;
`;
