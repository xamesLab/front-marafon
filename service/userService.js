import config from "../config.js";
import utils from "../utils.js";

const HEADER = utils.createHeader();

class User {
    async checkAuth() {
        const response = await this.getProfile();
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem(
                "stateApp",
                JSON.stringify({
                    name: data.name,
                    email: data.email,
                    token: data.token,
                })
            );
        } else {
            localStorage.setItem("stateApp", JSON.stringify({}));
        }
    }

    async register(email) {
        try {
            return await fetch(config.BASE_URL + "/user", {
                method: "POST",
                headers: HEADER,
                body: JSON.stringify({ email }),
            });
        } catch (e) {
            return {
                error: e,
            };
        }
    }

    async setName(name) {
        try {
            return await fetch(config.BASE_URL + "/user", {
                method: "PATCH",
                headers: HEADER,
                body: JSON.stringify({ name }),
            });
        } catch (error) {
            return { error };
        }
    }

    async getProfile() {
        try {
            return await fetch(config.BASE_URL + "/user/me", {
                method: "GET",
                headers: HEADER,
            });
        } catch (error) {
            return { error };
        }
    }
}

export default new User();
