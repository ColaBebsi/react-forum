import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PostCreateSection } from "../../components/PostCreateSection/PostCreateSection";
import UserKit from "../../data/UserKit";

export const PostCreatePage = () => {
    const [categoriesList, setCategoriesList] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [formData, setFormData] = useState({});
    const [status, setStatus] = useState("");

    const userKit = new UserKit();

    const fetchCategoriesList = () => {
        userKit
            .getCategories()
            .then(res => res.json())
            .then(({ results }) => {
                setCategoriesList(results);
            });
    };

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        setFormData({
            title,
            content,
            category,
        });

        userKit.postCreate(formData).then(res => {
            res.json();

            if (res.status === 201) {
                history.push("/posts");
            } else {
                setStatus("Oops, something went wrong!");
            }
        });
    };

    const handleTitleChange = e => {
        setTitle(e.target.value);
    };

    const handleContentChange = e => {
        setContent(e.target.value);
    };

    const handleCategoryChange = e => {
        setCategory(e.target.value);
    };

    useEffect(() => {
        fetchCategoriesList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PostCreateSection
            handleOnSubmit={handleSubmit}
            handleTitleOnChange={handleTitleChange}
            handleContentOnChange={handleContentChange}
            handleCategoryOnChange={handleCategoryChange}
            status={status}
            categoriesList={categoriesList}
        />
    );
};
