import React from "react";
import { Container } from "../../globalStyles";
import { Button } from "../../globalStyles";
import {
    HomePageSection,
    ForumInfo,
    UserInfo,
    BtnLink,
} from "./HomeSection.elements";

const HomeSection = ({ user }) => {
    return (
        <>
            <HomePageSection>
                <Container>
                    <ForumInfo>
                        <h1>Welcome to REACTorum</h1>
                    </ForumInfo>
                    <UserInfo>
                        {user ? <h2>Hello, {user.firstName}</h2> : "User."}
                    </UserInfo>
                    <BtnLink to="/posts">
                        <Button>See posts</Button>
                    </BtnLink>
                </Container>
            </HomePageSection>
        </>
    );
};

export default HomeSection;
