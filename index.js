import { MODAL, BUTTONS, FORM, MAIN } from "./view.js";
import { initTimer } from "./timer.js";
import { settingsContent, loginContent } from "./popupContent.js";
import utils from "./utils.js";
import { render } from "./render.js";
import message from "./service/messageService.js";
import storage from "./storage.js";

(function init() {
    initTimer();
    utils.removeModal();
    MAIN.name.innerText = storage.currentName;

    message.setMessage().then((r) => {
        render();
        utils.toogleLoader(false);
    });

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
    FORM.form.addEventListener("submit", (e) => {
        let inputValue = e.target.text.value;
        if (inputValue) {
            message.sendMessage(inputValue);
            e.target.text.value = "";
            render();
        }
    });
})();
