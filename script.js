{
    
const sayHello  = () => {
    window.addEventListener("load", function () {
      console.log("HelloWorld!... The page has loaded")
  })};
  
  sayHello();
  
  // container start
  
  const start = () => {
      const containerOff = document.querySelector(".container--off")
      const container__start = document.querySelector(".container__start");
      container__start.classList.toggle("container__startOff");
      container__startButton.classList.toggle("container__startButtonOff");
      containerOff.classList.toggle("container");
  };
  
  const container__startButton = document.querySelector(".container__startButton");
  container__startButton.addEventListener("click", start);
  
  
  // ...........cookies_alert
  const alert = () => {
      const cookies__alert = document.querySelector(".cookies__alert");
      cookies__alert.remove();
  };
  
  const button__akcept = document.querySelector(".button__akcept");
  button__akcept.addEventListener("click", alert)
  
  // Change mode
  
  const mode = () => {
      const body = document.querySelector(".body");
      body.classList.toggle("body__dark");
      const themeName = document.querySelector(".themeName");
      themeName.innerText = body.classList.contains("body__dark") ? "jasny" : "ciemny";
  }
  
  const button__mode = document.querySelector(".button__mode");
  button__mode.addEventListener("click", mode);
  
}