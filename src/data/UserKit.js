const ROOT_URL = `https://lab.willandskill.eu`;
const REGISTER_URL = `${ROOT_URL}/api/v1/auth/users/`;
const LOGIN_URL = `${ROOT_URL}/api/v1/auth/api-token-auth/`;

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
        return localStorage.getItem("JWT");
    }

    setToken(token) {
        localStorage.setItem("JWT", token);
    }
}
