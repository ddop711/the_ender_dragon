const html = document.documentElement;
const btn = document.querySelector(".darkmodebtn");

if (localStorage.getItem("darkmode") === "true") {
  html.classList.add("dark");
}

function toggleTheme() {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("darkmode", true);
  } else {
    localStorage.setItem("darkmode", false);
  }
}

btn.addEventListener("click", toggleTheme);
