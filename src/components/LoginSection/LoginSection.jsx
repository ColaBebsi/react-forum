import React from "react";
import { Button, Container, Input } from "../../globalStyles";
import {
    LoginForm,
    LoginPageSection,
    Title,
    Status,
} from "./LoginSection.elements";

const LoginSection = props => {
    return (
        <>
            <LoginPageSection>
                <Container>
                    <Title>Login</Title>
                    <LoginForm onSubmit={props.handleOnSubmit}>
                        <Status>{props.handleStatus}</Status>
                        <label>
                            <p>Email</p>
                            <Input
                                type="email"
                                name="email"
                                onChange={props.handleOnChange}
                                value={props.email}
                            />
                        </label>
                        <label>
                            <p>Password</p>
                            <Input
                                type="password"
                                name="password"
                                onChange={props.handleOnChange}
                                value={props.password}
                            />
                        </label>
                        <Button>Login</Button>
                    </LoginForm>
                </Container>
            </LoginPageSection>
        </>
    );
};

export default LoginSection;
