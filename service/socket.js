import utils from "../utils.js";
import messageService from "./messageService.js";
import { render } from "../render.js";

const socket = new WebSocket(`wss://mighty-cove-31255.herokuapp.com/websockets?${utils.getToken()}`);

socket.onopen = function (e) {
    console.log("connect...");
};

socket.onmessage = function (event) {
    try {
        messageService.setMessage(JSON.parse(event.data)).then((_) => render());
    } catch (error) {
        console.log("error json", error);
    }
};

socket.onclose = function (event) {
    if (event.wasClean) {
        console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
        console.log("[close] Соединение прервано");
        setTimeout(() => {
            //location.reload();
        }, 5000);
    }
};

socket.onerror = function (error) {
    console.log(`[error] ${error.message}`);
};

export default socket;