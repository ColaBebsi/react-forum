import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserKit from "../../data/UserKit";

export const PostListPage = () => {
    const [postList, setPostList] = useState([]);

    const userKit = new UserKit();

    const fetchPostList = () => {
        userKit
            .postList()
            .then(res => res.json())
            .then(({ results }) => setPostList(results));
    };

    useEffect(() => {
        fetchPostList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(postList);

    return (
        <div>
            <h1>Post List Page</h1>
            <div>
                <Link to={"/posts/create"}>Create post</Link>
            </div>
            <hr />
            <div>
                <ul>
                    {postList &&
                        postList.map((post, index) => (
                            <li key={index} value={post.id}>
                                <strong>{post.author ? post.author.email : "N/A"}</strong>:{" "}
                                {post.title}
                                <Link to={`/posts/${post.id}`}>Details...</Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};
