// constant
const bow = document.querySelector("#hotspotBow-2");
const sword = document.querySelector("#hotspotSword-2");
const apple = document.querySelector("#hotspotApple-2");
const overskrift = document.querySelector(".info-text > h2");
const underrubrik = document.querySelector(".placeholder");
const tekst1 = document.querySelector("#efficiency");
const tekst2 = document.querySelector("#requirement");
//Bow
bow.addEventListener("mouseover", hover);
function hover() {
  console.log("6");
  bow.style.fill = "red";
}

bow.addEventListener("mouseout", out);
function out() {
  console.log("7");
  bow.style.fill = "blue";
}

bow.addEventListener("click", click);
function click() {
  console.log("7");
  overskrift.textContent = "Mineraft bow and arrow";
  underrubrik.textContent = "Minecraft bue går crazy";
  tekst1.innerHTML = `Bue tekst 1`;
  tekst2.innerHTML = `<h3>Bue overskrift</h3>
  <p>bue tekst 2</p>`;
}

//Sword
sword.addEventListener("mouseover", hoverSword);
function hoverSword() {
  console.log("6");
  sword.style.fill = "red";
}

sword.addEventListener("mouseout", outSword);
function outSword() {
  console.log("7");
  sword.style.fill = "blue";
}

sword.addEventListener("click", clickSword);
function clickSword() {
  console.log("7");
  overskrift.textContent = "Mineraft Sværd";
  underrubrik.textContent = "Minecraft sværd går crazy";
  tekst1.innerHTML = `Sværd tekst 1`;
  tekst2.innerHTML = `<h3>Sværd overskrift</h3>
  <p>sværd tekst 2</p>`;
}

//Apple
apple.addEventListener("mouseover", hoverApple);
function hoverApple() {
  console.log("6");
  apple.style.fill = "red";
}

apple.addEventListener("mouseout", outApple);
function outApple() {
  console.log("7");
  apple.style.fill = "blue";
}

apple.addEventListener("click", clickApple);
function clickApple() {
  console.log("7");
  overskrift.textContent = "Mineraft Æble";
  underrubrik.textContent = "Minecraft æble går crazy";
  tekst1.innerHTML = `Æble tekst 1`;
  tekst2.innerHTML = `<h3>Æble overskrift</h3>
  <p>æble tekst 2</p>`;
}
