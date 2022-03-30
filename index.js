const INPUT = document.querySelector("#button");
let ibtnClose = 0;
let btnCLose = [];

console.log(INPUT);
init();

function init() {
  const containert = document.getElementById("container");
  INPUT.addEventListener("click", () => {
    containert.innerHTML += templateHTML();
    ibtnClose++;
    for (let i = 0; i < ibtnClose; i++) {
      btnCLose[i] = document.querySelector(`#btn-close-${i}`);
    }
    console.log(btnCLose);
  });
}

function templateHTML() {
  return `
  <div class="values">
  <div id="btn-close-${ibtnClose}" class="btn-close" onclick="displayMessage()">    
    <svg class="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
  </div>
  <div class="box-txt-all-caracter box-txt-all-caracter"></div>
  <div class="box-txt-all-binary box-txt-all-binary"></div>
</div>
  `;
}

function displayMessage() {
  for (let i = 0; i < ibtnClose; i++) {
    btnCLose[i].addEventListener("click", () => {
      console.log("Hello world" + i);
    });
  }
}
