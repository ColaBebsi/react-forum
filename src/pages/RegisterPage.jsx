import React, { useState, useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom";
import RegisterSection from "../components/RegisterSection/RegisterSection";
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

    const handleSubmit = e => {
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

    const handleChange = e => {
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
        <RegisterSection
            handleOnSubmit={handleSubmit}
            handleOnChange={handleChange}
            status={status}
            countriesList={countriesList}
        />
    );
};
