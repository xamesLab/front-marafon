import config from "../config.js";
import utils from "../utils.js";
import storage from "../storage.js";

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

    async setMessage() {
        return this.getAll().then((response) => {
            const numberLastMessage = config.NUMBER_LAST_MESSAGE;
            const messageArr = response.messages;
            const lastMessage = messageArr.slice(messageArr.length - numberLastMessage, messageArr.length);
            lastMessage.forEach((i) => {
                storage.state.unshift({
                    author: i.user.name,
                    content: i.text,
                    data: "",
                    status: "DELIVERED",
                });
            });
        });
    }

    async sendMessage(text) {
        storage.state.unshift({
            author: "",
            content: text,
            date: "",
            status: "SENDED",
        });
    }
}

export default new Message();
