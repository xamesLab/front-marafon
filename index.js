import { MODAL, BUTTONS, FORM, MAIN } from "./view.js";
import { initTimer } from "./timer.js";
import { settingsContent, loginContent } from "./popupContent.js";
import utils from "./utils.js";
import { render } from "./render.js";
import message from "./service/messageService.js";
import user from "./service/userService.js";
import storage from "./storage.js";
import socket from "./service/socket.js";

message.setMessage().then((r) => {
    render();
    utils.toogleLoader(false);
});

user.checkAuth().then((r) => {
    const stateApp = JSON.parse(localStorage.getItem("stateApp")) || {};
    storage.currentName = stateApp.name;
    storage.currentEmail = stateApp.email;

    MAIN.name.innerText = storage.currentName || "не авторизован";
});

initTimer();

function init() {
    utils.removeModal();

    MODAL.modal.addEventListener("click", (e) => {
        e.stopPropagation();
        utils.removeModal();
    });

    MODAL.wrapper.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    BUTTONS.closeModal.addEventListener("click", (e) => {
        utils.removeModal();
    });

    BUTTONS.loginUnlogin.addEventListener("click", (e) => {
        MODAL.title.innerText = "Авторизация";
        loginContent();
        utils.openModal();
    });

    BUTTONS.settings.addEventListener("click", (e) => {
        MODAL.title.innerText = "Настройки";
        settingsContent();
        utils.openModal();
    });

    // send message
    FORM.form.addEventListener("submit", async (e) => {
        let inputValue = e.target.text.value;
        if (inputValue) {
            message.sendMessage(inputValue).then((isSended) => {
                if (isSended) {
                    e.target.text.value = "";
                    render();
                } else {
                    e.target.text.value = "нужна авторизация";
                }
            });
        }
    });
}

init();
