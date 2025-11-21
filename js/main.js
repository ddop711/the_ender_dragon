// constant
const helmet = document.querySelector("#hotspotHelmet-2");
const sword = document.querySelector("#hotspotSword-2");
const apple = document.querySelector("#hotspotApple-2");
const overskrift = document.querySelector(".info-text > h2");
const underrubrik = document.querySelector(".placeholder");
const tekst1 = document.querySelector("#efficiency");
const tekst2 = document.querySelector("#requirement");

//Bow
helmet.addEventListener("mouseover", hover);
function hover() {
  helmet.style.fill = "red";
}

helmet.addEventListener("mouseout", out);
function out() {
  helmet.style.fill = "white";
}

helmet.addEventListener("click", click);
function click() {
  overskrift.textContent = "Helmet";
  underrubrik.textContent = "Hvis vi skal op i mod Enderdragen, skal vi udryste os selv med hjelme og brynjer, for at undgå at dø.";
  tekst1.innerHTML = `<img src="./EK/04_animation/the_ender_dragon/img/helmet.webp" alt="helmet";">`;
}

//Sword
sword.addEventListener("mouseover", hoverSword);
function hoverSword() {
  sword.style.fill = "red";
}

sword.addEventListener("mouseout", outSword);
function outSword() {
  sword.style.fill = "white";
}

sword.addEventListener("click", clickSword);
function clickSword() {
  overskrift.textContent = "Sværd";
  underrubrik.textContent = "For at skade Enderdragen skal vi bruge våben. Få fat i et sværd, gerne af netherite, men diamant er også fint.";
  tekst1.innerHTML = `<img src="./EK/04_animation/the_ender_dragon/img/sword.png" alt="sword";">`;
}

//Apple
apple.addEventListener("mouseover", hoverApple);
function hoverApple() {
  apple.style.fill = "red";
}

apple.addEventListener("mouseout", outApple);
function outApple() {
  apple.style.fill = "white";
}

apple.addEventListener("click", clickApple);
function clickApple() {
  overskrift.textContent = "Gyldne Æble";
  underrubrik.textContent = "Vi skal i krig, så det er vigtigt at have spist godt inden, eller imens.";
  tekst1.innerHTML = `<img src="./EK/04_animation/the_ender_dragon/img/goldenapple.webp" alt="apple";">
  `;
}
