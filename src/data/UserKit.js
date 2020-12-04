const ROOT_URL = `https://lab.willandskill.eu`;
const REGISTER_URL = `${ROOT_URL}/api/v1/auth/users/`;
const LOGIN_URL = `${ROOT_URL}/api/v1/auth/api-token-auth/`;
const COUNTRIES_LIST_URL = `${ROOT_URL}/api/v1/countries/`;
const CATEGORIES_URL = `${ROOT_URL}/api/v1/forum/categories/`;
const ME_URL = `${ROOT_URL}/api/v1/me/`;

const POST_LIST_URL = `${ROOT_URL}/api/v1/forum/posts/`;
// const POST_DETAIL_URL = `${ROOT_URL}/api/v1/forum/posts/${id}/`;
const POST_CREATE_URL = `${ROOT_URL}/api/v1/forum/posts/`;

// const REPLY_CREATE_URL = `${ROOT_URL}/api/v1/forum/posts/`;
// const REPLY_LIST_URL = `${ROOT_URL}/api/v1/forum/posts/${id}/replies`;

export default class UserKit {
    register = userData => {
        return fetch(REGISTER_URL, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: this.getPublicHeaders(),
        });
    };

    login = userData => {
        return fetch(LOGIN_URL, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: this.getPublicHeaders(),
        });
    };

    getCountries = () => {
        return fetch(COUNTRIES_LIST_URL, {
            headers: this.getPublicHeaders(),
        });
    };

    getCategories = () => {
        return fetch(CATEGORIES_URL, {
            headers: this.getPrivateHeaders(),
        });
    };

    getMe = () => {
        return fetch(ME_URL, {
            headers: this.getPrivateHeaders(),
        });
    };

    postList = () => {
        return fetch(POST_LIST_URL, {
            headers: this.getPrivateHeaders(),
        });
    };

    postDetail = id => {
        return fetch(`${ROOT_URL}/api/v1/forum/posts/${id}/`, {
            headers: this.getPrivateHeaders(),
        });
    };

    postCreate = post => {
        return fetch(`${POST_CREATE_URL}`, {
            method: "POST",
            body: JSON.stringify(post),
            headers: this.getPrivateHeaders(),
        });
    };

    getPublicHeaders() {
        return {
            "Content-Type": "application/json",
        };
    }

    getPrivateHeaders() {
        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
        };
    }

    getToken() {
        return localStorage.getItem("JWT_APP");
    }

    setToken(token) {
        localStorage.setItem("JWT_APP", token);
    }
}
