import React, { useEffect, useState } from "react";
import { HomeSection } from "../components";
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
        <>
            <HomeSection user={user} />
        </>
    );
};
