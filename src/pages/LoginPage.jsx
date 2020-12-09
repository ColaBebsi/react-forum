import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginSection from "../components/LoginSection/LoginSection";
import UserKit from "../data/UserKit";

export const LoginPage = () => {
    const [status, setStatus] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const history = useHistory();
    const userKit = new UserKit();

    const handleSubmit = e => {
        e.preventDefault();

        userKit
            .login(formData)
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    userKit.setToken(data.token);

                    history.push("/");
                } else {
                    setStatus("Unable to login with provided credentials.");
                }
            });

        setTimeout(() => {
            setStatus("");
        }, 2000);

        setFormData({
            email: formData.email,
            password: "",
        });
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <LoginSection
            handleOnSubmit={handleSubmit}
            handleOnChange={handleChange}
            handleStatus={status}
            email={formData.email}
            password={formData.password}
        />
    );
};
