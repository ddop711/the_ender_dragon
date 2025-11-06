//Bow
console.log(document.querySelector("#hotspotBow"));

document.querySelector("#hotspotBow-2").addEventListener("mouseover", hover);
function hover() {
  console.log("6");
  document.querySelector("#hotspotBow-2").style.fill = "red";
}

document.querySelector("#hotspotBow-2").addEventListener("mouseout", out);
function out() {
  console.log("7");
  document.querySelector("#hotspotBow-2").style.fill = "blue";
}

document.querySelector("#hotspotBow-2").addEventListener("click", click);
function click() {
  console.log("7");
  document.querySelector(".info-text > h2").textContent =
    "Mineraft bow and arrow";
  document.querySelector(".placeholder").textContent =
    "Minecraft bue går crazy";
  document.querySelector("#efficiency").innerHTML = `Bue tekst 1`;
  document.querySelector("#requirement").innerHTML = `<h3>Bue overskrift</h3>
  <p>bue tekst 2</p>`;
}

//Sword
console.log(document.querySelector("#hotspotSword"));

document
  .querySelector("#hotspotSword-2")
  .addEventListener("mouseover", hoverSword);
function hoverSword() {
  console.log("6");
  document.querySelector("#hotspotSword-2").style.fill = "red";
}

document
  .querySelector("#hotspotSword-2")
  .addEventListener("mouseout", outSword);
function outSword() {
  console.log("7");
  document.querySelector("#hotspotSword-2").style.fill = "blue";
}

document.querySelector("#hotspotSword-2").addEventListener("click", clickSword);
function clickSword() {
  console.log("7");
  document.querySelector(".info-text > h2").textContent = "Mineraft Sværd";
  document.querySelector(".placeholder").textContent =
    "Minecraft sværd går crazy";
  document.querySelector("#efficiency").innerHTML = `Sværd tekst 1`;
  document.querySelector("#requirement").innerHTML = `<h3>Sværd overskrift</h3>
  <p>sværd tekst 2</p>`;
}

//Apple
console.log(document.querySelector("#hotspotApple"));

document
  .querySelector("#hotspotApple-2")
  .addEventListener("mouseover", hoverApple);
function hoverApple() {
  console.log("6");
  document.querySelector("#hotspotApple-2").style.fill = "red";
}

document
  .querySelector("#hotspotApple-2")
  .addEventListener("mouseout", outApple);
function outApple() {
  console.log("7");
  document.querySelector("#hotspotApple-2").style.fill = "blue";
}

document.querySelector("#hotspotApple-2").addEventListener("click", clickApple);
function clickApple() {
  console.log("7");
  document.querySelector(".info-text > h2").textContent = "Mineraft Æble";
  document.querySelector(".placeholder").textContent =
    "Minecraft æble går crazy";
  document.querySelector("#efficiency").innerHTML = `Æble tekst 1`;
  document.querySelector("#requirement").innerHTML = `<h3>Æble overskrift</h3>
  <p>æble tekst 2</p>`;
}
