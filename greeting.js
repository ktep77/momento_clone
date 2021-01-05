const form = document.querySelector(".js_form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js_greetings");

const USER_STORAGE = "currentUser",
    SHOWING_ON = "showing";

function saveName(text) {
    localStorage.setItem(USER_STORAGE, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    //console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);


}

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);


}

function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_STORAGE);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();

}
init();