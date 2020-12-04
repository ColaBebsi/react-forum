import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserKit from "../data/UserKit";

export const HomePage = () => {
    const [user, setUser] = useState({});

    const userKit = new UserKit();

    const fetchMe = () => {
        userKit
            .getMe()
            .then(res => res.json())
            .then(data => setUser(data));
    };

    useEffect(() => {
        fetchMe();
    }, []);

    return (
        <div>
            <h1>Welcome to the ColaBebsi Forum! Let's chat!🐱‍💻</h1>
            {user && <div>Hello {user.firstName || "User"}!</div>}
            <div>
                <Link to="/posts">Go to post</Link>
            </div>
        </div>
    );
};
