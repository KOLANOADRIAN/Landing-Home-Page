

window.addEventListener("load", function () {
    console.log("HelloWorld!... The page has loaded")
});



const start = () => {
    const containerOff = document.querySelector(".container--off")
    const container__start = document.querySelector(".container__start");
    container__start.classList.toggle("container__startOff");
    container_startButton.classList.toggle("container_startButtonOff");
    containerOff.classList.toggle("container");
}

const container_startButton = document.querySelector(".container_startButton");
container_startButton.addEventListener("click", start);


// ...........cookies_alert
const alert = () => {
    const cookies_alert = document.querySelector(".cookies_alert");
    cookies_alert.remove();
    const read = document.querySelector(".read");
    read.remove();
};

const button_akcept = document.querySelector(".button_akcept");
button_akcept.addEventListener("click", alert)

const info = () => {
    const read = document.querySelector(".read");
    read.classList.toggle("read_open");
};
const button_info = document.querySelector(".button_info");
button_info.addEventListener("click", info);


// 
const body = document.querySelector(".body");
const button_mode = document.querySelector(".button_mode");
const themeName = document.querySelector(".themeName")

button_mode.addEventListener("click", () => {
    body.classList.toggle("body_dark");
    themeName.innerText = body.classList.contains("body_dark") ? "jasny" : "ciemny"
});
