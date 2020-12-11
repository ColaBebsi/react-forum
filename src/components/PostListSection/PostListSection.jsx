import React from "react";
import { Container } from "../../globalStyles";
import {
    PostListPageSection,
    Title,
    CreateLink,
    Table,
    TableRow,
    TableHead,
    TableData,
    TableIcon,
} from "./PostListSection.elements";

export const PostListSection = ({ postList }) => {
    return (
        <PostListPageSection>
            <Container>
                <Title>Post List</Title>
                <CreateLink to="/posts/create">
                    Create Post
                </CreateLink>

                <Table>
                    <TableRow>
                        <TableHead>Author</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                    {postList &&
                        postList.map((post, index) => (
                            <TableRow key={index}>
                                <TableData>
                                    {post.author ? post.author.email : "N/A"}
                                </TableData>
                                <TableData>{post.title}</TableData>
                                <TableData>
                                    <CreateLink to={`/posts/${post.id}`}>
                                        <TableIcon></TableIcon>
                                    </CreateLink>
                                </TableData>
                            </TableRow>
                        ))}
                </Table>
            </Container>
        </PostListPageSection>
    );
};
