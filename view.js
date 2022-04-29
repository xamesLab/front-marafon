const MODAL = {
    wrapper: document.querySelector(".modal"),
    content: document.querySelector(".modal__content"),
};

const BUTTONS = {
    closeModal: document.querySelector(".modal__close"),
    settings: document.querySelector(".header__btn_set"),
    loginUnlogin: document.querySelector(".header__btn_gate"),
};

const MESSAGE = {
    template: document.querySelector(".message_tmpl"),
    container: document.querySelector(".container"),
    scrollBox: document.querySelector(".message-field"),
};

const FORM = {
    input: document.querySelector(".input__text"),
    form: document.querySelector(".input"),
    sendMessage: document.querySelector(".input__send"),
};

export { MODAL, BUTTONS, MESSAGE, FORM };
