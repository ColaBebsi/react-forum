import React, { useState, useEffect } from "react";
import { PostDetailSection } from "../../components/PostDetailSection/PostDetailSection";
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

            <PostDetailSection post={postDetail} />
        </form>
    );
};
