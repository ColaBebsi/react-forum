import React, { useState, useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value,
    };
};

export const RegisterPage = () => {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [countriesList, setCountriesList] = useState([]);
    const [status, setStatus] = useState("");

    const history = useHistory();
    const userKit = new UserKit();

    const handleOnSubmit = e => {
        e.preventDefault();

        userKit.register(formData).then(res => {
            res.json();

            if (res.status === 201) {
                history.push("/login");
            } else {
                setStatus("Oops, something went wrong!");
            }
        });
    };

    const handleOnChange = e => {
        setFormData({
            name: e.target.name,
            value: e.target.value,
        });
    };

    useEffect(() => {
        userKit
            .getCountries()
            .then(res => res.json())
            .then(({ results }) => setCountriesList(results));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(formData);

    return (
        <form onSubmit={handleOnSubmit}>
            <fieldset>
                <h1>Register Page</h1>
                <h3>{status}</h3>
            </fieldset>

            <fieldset>
                <label>
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                    />
                </label>
                <label>
                    <p>First name</p>
                    <input
                        type="text"
                        name="firstName"
                        onChange={handleOnChange}
                    />
                </label>
                <label>
                    <p>Last name</p>
                    <input
                        type="text"
                        name="lastName"
                        onChange={handleOnChange}
                    />
                </label>
                <label>
                    <p>Country</p>
                    <select name="country" onChange={handleOnChange}>
                        <option value="">--Please select an option--</option>
                        {countriesList &&
                            countriesList.map(country => (
                                <option key={country.id} value={country.id}>
                                    {country.title}
                                </option>
                            ))}
                    </select>
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                    />
                </label>
            </fieldset>

            <fieldset>
                <button>Submit</button>
            </fieldset>
        </form>
    );
};
