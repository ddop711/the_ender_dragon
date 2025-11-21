const btn_open1 = document.querySelector("#cta_open1");
const btn_close1 = document.querySelector("#close_btn1");

btn_open1.addEventListener("click", openModal);
function openModal() {
  document.querySelector("#dialog1").showModal();
  document.querySelector("#dialog1").classList.add("fadeIn");
}

btn_close1.addEventListener("click", closeModal);
function closeModal() {
  document.querySelector("#dialog1").close();
  document.querySelector("#dialog1").classList.add("fadeOut");
  document.querySelector("#dialog1").classList.remove("fadeIn");
}

const btn_open2 = document.querySelector("#cta_open2");
const btn_close2 = document.querySelector("#close_btn2");

btn_open2.addEventListener("click", openModal2);
function openModal2() {
  document.querySelector("#dialog2").showModal();
  document.querySelector("#dialog2").classList.add("fadeIn");
}

btn_close2.addEventListener("click", closeModal2);
function closeModal2() {
  document.querySelector("#dialog2").close();
  document.querySelector("#dialog2").classList.add("fadeOut");
  document.querySelector("#dialog2").classList.remove("fadeIn");
}

const btn_open3 = document.querySelector("#cta_open3");
const btn_close3 = document.querySelector("#close_btn3");

btn_open3.addEventListener("click", openModal3);
function openModal3() {
  document.querySelector("#dialog3").showModal();
  document.querySelector("#dialog3").classList.add("fadeIn");
}

btn_close3.addEventListener("click", closeModal3);
function closeModal3() {
  document.querySelector("#dialog3").close();
  document.querySelector("#dialog3").classList.add("fadeOut");
  document.querySelector("#dialog3").classList.remove("fadeIn");
}
