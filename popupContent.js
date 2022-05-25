import { MODAL } from "./view.js";
import user from "./service/userService.js";
import utils from "./utils.js";
import storage from "./storage.js";

export function settingsContent() {
    MODAL.content.innerHTML = "";
    MODAL.content.style.marginTop = 0;
    const formLabel = document.createElement("label");
    formLabel.setAttribute("for", "name");
    formLabel.innerText = "Имя в чате";

    const form = document.createElement("form");
    form.classList.add("input-settings");

    const inputName = document.createElement("input");
    inputName.setAttribute("name", "name");
    inputName.setAttribute("placeholder", "имя");
    inputName.setAttribute("type", "text");
    inputName.classList.add("input__text");

    const inputSubmit = document.createElement("input");
    inputSubmit.setAttribute("type", "submit");
    inputSubmit.setAttribute("value", "->");
    inputSubmit.classList.add("input__send");
    inputSubmit.classList.add("btn");

    MODAL.content.append(formLabel);
    form.append(inputName);
    form.append(inputSubmit);
    MODAL.content.append(form);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const imputValue = form.name.value;
        if (!storage.currentName) {
            formLabel.innerText = "нужна авторизация";
            formLabel.style.color = "red";
            formLabel.style.fontSize = "1.2rem";
            return;
        }

        const result = await user.setName(imputValue);

        if (result.ok) {
            form.name.value = "";
            location.reload();
        }
    });
}

export function loginContent() {
    MODAL.content.innerHTML = "";
    MODAL.content.style.marginTop = "70px";

    const formLabel = document.createElement("label");
    formLabel.setAttribute("for", "email");
    formLabel.innerText = "Почта:";

    const form = document.createElement("form");
    form.classList.add("input-email");

    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("name", "email");
    inputEmail.setAttribute("placeholder", "email");
    inputEmail.setAttribute("type", "text");
    inputEmail.classList.add("input__email");

    const inputSubmit = document.createElement("input");
    inputSubmit.setAttribute("type", "submit");
    inputSubmit.setAttribute("value", "Получить код");
    inputSubmit.classList.add("input__btn");
    inputSubmit.classList.add("btn");

    const inputSkip = document.createElement("p");
    inputSkip.classList.add("input-skip");
    inputSkip.innerText = "уже есть код";

    MODAL.content.append(formLabel);
    form.append(inputEmail);
    form.append(inputSubmit);
    form.append(inputSkip);
    MODAL.content.append(form);

    inputSkip.addEventListener("click", (e) => {
        confirmContent();
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const imputValue = form.email.value;
        const result = await user.register(imputValue);

        if (result.ok) {
            form.email.value = "";
            confirmContent();
        }
    });
}

export function confirmContent() {
    MODAL.content.innerHTML = "";
    MODAL.content.style.marginTop = "70px";

    const formLabel = document.createElement("label");
    formLabel.setAttribute("for", "code");
    formLabel.innerText = "Код:";

    const form = document.createElement("form");
    form.classList.add("input-code");

    const inputCode = document.createElement("input");
    inputCode.setAttribute("name", "code");
    inputCode.setAttribute("placeholder", "код");
    inputCode.setAttribute("type", "text");
    inputCode.classList.add("input__code");

    const inputSubmit = document.createElement("input");
    inputSubmit.setAttribute("type", "submit");
    inputSubmit.setAttribute("value", "Войти");
    inputSubmit.classList.add("input__btn");
    inputSubmit.classList.add("btn");

    MODAL.content.append(formLabel);
    form.append(inputCode);
    form.append(inputSubmit);
    MODAL.content.append(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputValue = form.code.value;
        if (typeof inputValue === "string" && inputValue.length > 0) {
            document.cookie = `token=${inputValue}`;
            //utils.removeModal();
            location.reload();
        } else {
            formLabel.innerText = "неправильный код";
            formLabel.style.color = "red";
        }
    });
}