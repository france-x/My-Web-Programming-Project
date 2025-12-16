// Welcome text animation
window.addEventListener("load", () => {
    const welcome = document.getElementById("welcomeText");
    welcome.style.opacity = 0;
    welcome.style.transform = "translateY(20px)";

    setTimeout(() => {
        welcome.style.transition = "0.8s ease";
        welcome.style.opacity = 1;
        welcome.style.transform = "translateY(0)";
    }, 200);
});

// Footer year
document.getElementById("year").textContent =
    `© ${new Date().getFullYear()} Web Programming`;

// Dark mode toggle
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeBtn.textContent = "Light Mode";
}

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "Dark Mode";
    }
});
