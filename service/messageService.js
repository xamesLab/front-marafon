import config from "../config.js";
import utils from "../utils.js";
import storage from "../storage.js";
import socket from "./socket.js";

const HEADER = utils.createHeader();

class Message {
    async getAll() {
        try {
            const data = await fetch(config.BASE_URL + "/messages", {
                method: "GET",
                headers: HEADER,
            });
            return await data.json();
        } catch (e) {
            return {
                error: e,
            };
        }
    }

    async setMessage(message) {
        // set last message
        if (message) {
            return storage.state.unshift({
                author: message.user.name,
                content: message.text,
                data: "",
                status: "DELIVERED",
            });
        }
        // set last N message
        return this.getAll().then((response) => {
            const numberLastMessage = config.NUMBER_LAST_MESSAGE;
            const messageArr = response.messages;
            const lastMessage = messageArr.slice(messageArr.length - numberLastMessage, messageArr.length);
            lastMessage.forEach((i) => {
                storage.state.unshift({
                    author: i.user.name,
                    email: i.user.email,
                    content: i.text,
                    data: "",
                    status: "DELIVERED",
                });
            });
        });
    }

    async sendMessage(text) {
        if (storage.currentName) {
            socket.send(
                JSON.stringify({
                    text: text,
                })
            );
            return true;
        } else {
            return false;
        }
    }
}

export default new Message();
