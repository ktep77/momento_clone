const clockContianer = document.querySelector(".js_clock");
const clockTitle = document.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minutes< 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;
    //${seconds < 10 ? `0${seconds}`:seconds}` if second is less than 10 then put 0 infront of seconds else just seconds
    //This is small if statement in 1 line
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();