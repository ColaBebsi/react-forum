import React, { useState, useEffect } from "react";
import { Post } from "../../components/Post";
import UserKit from "../../data/UserKit";

export const PostDetailPage = props => {
    const [postDetail, setPostDetail] = useState({});

    const id = props.match.params.id;
    const userKit = new UserKit();

    const fetchPostDetail = () => {
        userKit
            .postDetail(id)
            .then(res => res.json())
            .then(data => setPostDetail(data));
    };

    useEffect(() => {
        fetchPostDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <form>
            <fieldset>
                <h1>Post Detail Page</h1>
            </fieldset>

            <Post post={postDetail} />
        </form>
    );
};
