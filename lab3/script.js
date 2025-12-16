const themeBtn = document.getElementById('themeBtn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    themeBtn.textContent = body.classList.contains('dark-mode')
        ? 'Light Mode'
        : 'Dark Mode';
});

const editJobBtn = document.getElementById('editJobBtn');
const jobTitleElement = document.getElementById('jobTitle');

editJobBtn.addEventListener('click', () => {
    const newTitle = prompt("Enter your new job title:");

    if (newTitle && newTitle.trim() !== "") {
        jobTitleElement.textContent = newTitle.trim();
    }
});

const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skillsSection');

toggleSkillsBtn.addEventListener('click', () => {
    const hidden = skillsSection.style.display === 'none';
    skillsSection.style.display = hidden ? 'block' : 'none';
    toggleSkillsBtn.textContent = hidden ? 'Hide Skills' : 'Show Skills';
});

const msgBox = document.getElementById('msgBox');
const counterSpan = document.getElementById('counter');

msgBox.addEventListener('input', () => {
    const remaining = msgBox.maxLength - msgBox.value.length;
    counterSpan.textContent = remaining;
});

function validateForm() {
    const name = document.getElementById('nameField');
    const email = document.getElementById('emailField');

    if (!name.value.trim()) {
        alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert("Please enter your email.");
        email.focus();
        return false;
    }

    return true;
}

const dateDisplay = document.getElementById('dateDisplay');
dateDisplay.textContent = "Last Updated: " + new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

function displayTimeGreeting() {
    const greetingElement = document.getElementById('timeGreeting');
    const hour = new Date().getHours();

    let greeting =
        hour < 12 ? "Good morning!☀️" :
        hour < 18 ? "Good afternoon! 👋" :
                    "Good evening! 🌙";

    greetingElement.textContent = greeting;
}
