let body = document.getElementById("body");
let header = document.getElementById("header");
let navbar = document.getElementById("navigation");
let toggleDark = document.querySelector(".menu-toggle");
let sun = document.querySelector(".sun-icons");
let moon = document.querySelector(".moon-icons");

toggleDark.addEventListener("click", handleDarkMode);

function handleDarkMode () {
    if (sun.style.display === "block") {
        sun.style.display = "none";
        moon.style.display = "block";
        console.log(moon.style.display, "moon");
    } else {
        sun.style.display = "block";
        moon.style.display = "none";
        console.log(sun.style.display, "sun");
    }
    body.classList.toggle("dark");
    header.classList.toggle("dark");
    navbar.classList.toggle("dark");
}