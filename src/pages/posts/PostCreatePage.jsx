import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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

    const handleOnSubmit = e => {
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

    const handleTitleOnChange = e => {
        setTitle(e.target.value);
    };

    const handleContentOnChange = e => {
        setContent(e.target.value);
    };

    const handleCategoryOnChange = e => {
        setCategory(e.target.value);
    };

    useEffect(() => {
        fetchCategoriesList();
    }, []);

    return (
        <form onSubmit={handleOnSubmit}>
            <fieldset>
                <h1>Post Create Page</h1>
                <div>{status}</div>
            </fieldset>

            <fieldset>
                <label>
                    <p>Title</p>
                    <input
                        type="text"
                        name="title"
                        onChange={handleTitleOnChange}
                    />
                </label>
                <label>
                    <p>Content</p>
                    <input
                        type="text"
                        name="content"
                        onChange={handleContentOnChange}
                    />
                </label>
                <label>
                    <p>Category</p>
                    <select name="category" onChange={handleCategoryOnChange}>
                        <option value="gg">--Please select an option--</option>
                        {categoriesList &&
                            categoriesList.map((category, index) => (
                                <option key={index} value={category.id}>
                                    {category.title}
                                </option>
                            ))}
                    </select>
                </label>
            </fieldset>

            <fieldset>
                <button>Create post</button>
            </fieldset>
        </form>
    );
};
