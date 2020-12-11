import React from "react";
import { Container } from "../../globalStyles";
import {
    PostDetailPageSection,
    Title,
    Author,
    Category,
    MetaData,
} from "./PostDetailSection.elements";

export const PostDetailSection = ({ post }) => {
    return (
        <>
            <PostDetailPageSection>
                <Container>
                    <Title>Post Detail</Title>
                    <Author>
                        <h3>Author</h3>
                        {post.author &&
                            Object.entries(post.author).map((item, index) => (
                                <p key={index}>
                                    <strong>{item[0]}</strong>:{" "}
                                    {item[1] ? item[1] : "N/A"}
                                </p>
                            ))}
                    </Author>
                    <Category>
                        <h3>Category</h3>
                        {post.category &&
                            Object.entries(post.category).map((item, index) => {
                                return (
                                    <p key={index}>
                                        <strong>{item[0]}</strong>:{" "}
                                        {item[1] ? item[1] : "N/A"}
                                    </p>
                                );
                            })}
                    </Category>
                    <MetaData>
                        <h3>Meta data</h3>
                        <p>
                            <strong>Content</strong>: {post.content || "N/A"}
                        </p>
                        <p>
                            <strong>Count responses</strong>: {post.countResponses || "N/A"}
                        </p>
                        <p>
                            <strong>Country</strong>: {post.country || "N/A"}
                        </p>
                        <p>
                            <strong>Created at</strong>: {post.createdAt || "N/A"}
                        </p>
                        <p>
                            <strong>Is closed</strong>: {JSON.stringify(post.isClosed) || "N/A"}
                        </p>
                        <p>
                            <strong>Is pinned</strong>: {JSON.stringify(post.isPinned) || "N/A"}
                        </p>
                        <p>
                            <strong>Parent</strong>: {JSON.stringify(post.parent) || "N/A"}
                        </p>
                        <p>
                            <strong>Title</strong>: {post.title || "N/A"}
                        </p>
                        <p>
                            <strong>Updated at</strong>: {post.updatedAt || "N/A"}
                        </p>
                        <p>
                            <strong>User subscription updated</strong>: {JSON.stringify(post.userSubscriptionUpdated) || "N/A"}
                        </p>
                        <p>
                            <strong>User subscribed</strong>: {JSON.stringify(post.userSubscribed) || "N/A"}
                        </p>
                        <p>
                            <strong>View count</strong>: {post.viewCount || "N/A"}
                        </p>
                    </MetaData>

                    {/* <fieldset>
                <p>Responses</p>
                {post.responses && console.log(post.responses[0].author.email)}
            </fieldset> */}
                </Container>
            </PostDetailPageSection>
        </>
    );
};
