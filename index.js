import { MODAL, BUTTONS, MESSAGE, FORM } from "./view.js";
import state from "./storage.js";
import { initTimer } from "./timer.js";

(function init() {
    initTimer();

    MODAL.wrapper.addEventListener("click", (e) => {
        e.stopPropagation();
        MODAL.wrapper.style.display = "none";
    });

    MODAL.content.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    BUTTONS.closeModal.addEventListener("click", (e) => {
        MODAL.wrapper.style.display = "none";
    });

    BUTTONS.loginUnlogin.addEventListener("click", (e) => {
        MODAL.wrapper.style.display = "flex";
    });

    BUTTONS.settings.addEventListener("click", (e) => {
        MODAL.wrapper.style.display = "flex";
    });

    FORM.form.addEventListener("submit", (e) => {
        let inputValue = e.target.text.value;
        state.unshift({
            author: "Я",
            content: inputValue,
            date: "",
            status: "SENDED",
        });
        e.target.text.value = "";
        render();
    });
})();

function render() {
    MESSAGE.container.innerHTML = "";

    state.reduceRight((_, i) => {
        const message = document.createElement("div");
        const messageTemplate = MESSAGE.template.content.cloneNode(true);

        message.classList.add("message");
        message.append(messageTemplate);

        message.querySelector(".message__author").innerText = i.author;
        message.querySelector(".message__text").innerText = i.content;

        if (i.author === "Я") {
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
