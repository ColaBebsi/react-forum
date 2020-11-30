import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";

export const LoginPage = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [status, setStatus] = useState("");
    const [formData, setFormData] = useState({
        email: "kuhiq@mailinator.com",
        password: "Pa$$w0rd!",
    });

    const history = useHistory();
    const userKit = new UserKit();

    const handleOnSubmit = e => {
        e.preventDefault();

        userKit
            .login(formData)
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    setAccessToken(data.token);
                    userKit.setToken(data.token);

                    history.push("/");
                } else {
                    setStatus("Unable to login with provided credentials.");
                }
            });
    };

    const handleOnChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    console.log(accessToken);

    return (
        <form onSubmit={handleOnSubmit}>
            <fieldset>
                <h1>Login Page</h1>
                <h3>{status}</h3>
            </fieldset>

            <fieldset>
                <label>
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        value={formData.email}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        value={formData.password}
                    />
                </label>
            </fieldset>

            <fieldset>
                <button>Login</button>
            </fieldset>
        </form>
    );
};
