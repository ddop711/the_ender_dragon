const html = document.querySelector("html");
const btn = document.querySelector(".darkmodebtn");

if (localStorage.getItem("darkmode")) {
  html.classList.toggle("dark");
}

function toggleTheme() {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("darkmode", true);
  } else {
    localStorage.setItem = ("darkmode", false);
  }
}

btn.addEventListener("click", toggleTheme);
