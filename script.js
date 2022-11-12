
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