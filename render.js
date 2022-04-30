import {  MESSAGE,  MAIN } from "./view.js";
import storage from "./storage.js";

export const render = ()=>{
    MAIN.name.innerText = storage.currentName
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