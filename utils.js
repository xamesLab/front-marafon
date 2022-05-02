import { MODAL, MAIN } from "./view.js";

const getToken = () => {
    const cookie = document.cookie;
    return cookie.split(";").reduce((t, v) => {
        const cookie = v.trim();
        if (cookie.slice(0, 6) === "token=") {
            return cookie.split("=")[1];
        }
        return t;
    }, "");
};

const createHeader = () => {
    return {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: getToken() ? `Bearer ${getToken()}` : "",
    };
};

const openModal = () => {
    MODAL.modal.style.display = "flex";
};

const removeModal = () => {
    MODAL.modal.style.display = "none";
    MODAL.title.innerText = "";
    MODAL.content.innerHTML = "";
};

const toogleLoader = (stateLoader) => {
    if (stateLoader) {
        MAIN.loader.style.display = "block";
    } else {
        MAIN.loader.style.display = "none";
    }
};

export default {
    getToken,
    createHeader,
    removeModal,
    openModal,
    toogleLoader,
};
