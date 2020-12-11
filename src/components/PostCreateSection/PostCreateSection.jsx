import React from "react";
import { Button, Container, Input } from "../../globalStyles";
import {
    PostCreatePageSection,
    Title,
    CreatePostForm,
    Status,
    Select,
} from "./PostCreateSection.elements";

export const PostCreateSection = ({
    handleOnSubmit,
    handleTitleOnChange,
    handleContentOnChange,
    handleCategoryOnChange,
    status,
    categoriesList,
}) => {
    return (
        <>
            <PostCreatePageSection>
                <Container>
                    <Title>Create Post</Title>
                    <CreatePostForm onSubmit={handleOnSubmit}>
                        <Status>{status}</Status>
                        <label>
                            <p>Title</p>
                            <Input
                                type="text"
                                name="title"
                                onChange={handleTitleOnChange}
                            />
                        </label>
                        <label>
                            <p>Content</p>
                            <Input
                                type="text"
                                name="content"
                                onChange={handleContentOnChange}
                            />
                        </label>
                        <label>
                            <p>Category</p>
                            <Select
                                name="category"
                                onChange={handleCategoryOnChange}
                            >
                                <option value="gg">
                                    --Please select an option--
                                </option>
                                {categoriesList &&
                                    categoriesList.map((category, index) => (
                                        <option key={index} value={category.id}>
                                            {category.title}
                                        </option>
                                    ))}
                            </Select>
                        </label>
                        <Button>Create post</Button>
                    </CreatePostForm>
                </Container>
            </PostCreatePageSection>
        </>
    );
};
