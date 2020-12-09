import React from "react";

export const PostDetailSection = ({ post }) => {
    // const author = post.author ? post.author : "null..";

    console.log(post);
    return (
        <>
            <fieldset>
                <h3>{post.title}</h3>
            </fieldset>

            <fieldset>
                <p>Author</p>
                {post.author &&
                    Object.entries(post.author).map((item, index) => (
                        <p key={index}>
                            <strong>{item[0]}</strong>:{" "}
                            {item[1] ? item[1] : "N/A"}
                        </p>
                    ))}
            </fieldset>

            <fieldset>
                <p>Category</p>
                {post.category &&
                    Object.entries(post.category).map((item, index) => (
                        <p key={index}>
                            <strong>{item[0]}</strong>:{" "}
                            {item[1] ? item[1] : "N/A"}
                        </p>
                    ))}
            </fieldset>

            {/* <fieldset>
                <p>Responses</p>
                {post.responses && console.log(post.responses[0].author.email)}
            </fieldset> */}
        </>
    );
};

