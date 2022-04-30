import { MODAL, BUTTONS, MESSAGE, FORM } from "./view.js";
import storage from "./storage.js";
import { initTimer } from "./timer.js";
import {settingsContent, loginContent} from "./popupContent.js"
import utils from './utils.js'

(function init() {
    initTimer();
    utils.removeModal()

    MODAL.modal.addEventListener("click", (e) => {
        e.stopPropagation();
        utils.removeModal()
    });

    MODAL.wrapper.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    BUTTONS.closeModal.addEventListener("click", (e) => {
        utils.removeModal()
    });

    BUTTONS.loginUnlogin.addEventListener("click", (e) => {
        MODAL.title.innerText = 'Авторизация'
        loginContent()
        utils.openModal()
    });

    BUTTONS.settings.addEventListener("click", (e) => {
        MODAL.title.innerText = 'Настройки'
        settingsContent()
        utils.openModal()
    });

    FORM.form.addEventListener("submit", (e) => {
        let inputValue = e.target.text.value;
        if(inputValue){
            storage.state.unshift({
                author: '',
                content: inputValue,
                date: "",
                status: "SENDED",
            });
            e.target.text.value = "";
            render();
        }
    });
})();

export function render() {
    MESSAGE.container.innerHTML = "";

    storage.state.reduceRight((_, i) => {
        const message = document.createElement("div");
        const messageTemplate = MESSAGE.template.content.cloneNode(true);

        message.classList.add("message");
        message.append(messageTemplate);

        message.querySelector(".message__author").innerText = i.author||storage.currentName;
        message.querySelector(".message__text").innerText = i.content;

        if (!i.author||i.author === storage.currentName) {
            message.classList.add("message_to");
        } else {
            message.classList.add("message_from");
        }

        if (i.status === "SENDED") {
            message.classList.add("message_s");
        } else {
            message.classList.add("message_d");
        }

        MESSAGE.container.append(message);
        MESSAGE.scrollBox.scrollTop = MESSAGE.scrollBox.scrollHeight;
    }, 0);
}

render();
