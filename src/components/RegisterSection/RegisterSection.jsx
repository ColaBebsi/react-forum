import React from "react";
import { Button, Container, Input } from "../../globalStyles";
import {
    RegisterPageSection,
    RegisterForm,
    Title,
    Status,
    Select,
} from "./RegisterSection.elements";

const RegisterSection = ({
    handleOnSubmit,
    handleOnChange,
    status,
    countriesList,
}) => {
    return (
        <>
            <RegisterPageSection>
                <Container>
                    <Title>Register Page</Title>
                    <RegisterForm onSubmit={handleOnSubmit}>
                        <h3>{status}</h3>

                        <label>
                            <p>Email</p>
                            <Input
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                            />
                        </label>
                        <label>
                            <p>First name</p>
                            <Input
                                type="text"
                                name="firstName"
                                onChange={handleOnChange}
                            />
                        </label>
                        <label>
                            <p>Last name</p>
                            <Input
                                type="text"
                                name="lastName"
                                onChange={handleOnChange}
                            />
                        </label>
                        <label>
                            <p>Country</p>
                            <Select name="country" onChange={handleOnChange}>
                                <option value="">
                                    --Please select an option--
                                </option>
                                {countriesList &&
                                    countriesList.map(country => (
                                        <option
                                            key={country.id}
                                            value={country.id}
                                        >
                                            {country.title}
                                        </option>
                                    ))}
                            </Select>
                        </label>
                        <label>
                            <p>Password</p>
                            <Input
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                            />
                        </label>

                        <Button>Submit</Button>
                    </RegisterForm>
                </Container>
            </RegisterPageSection>
        </>
    );
};

export default RegisterSection;
