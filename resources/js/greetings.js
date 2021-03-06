const greetings = [
    "Hi,",
    "Hey,",
    "Hello,",
    "Hallo,",
    "Welcome,",
    "Bonjour,",
    "반가워요,",
    "I love",
    "I like"
]

const greetingsSub = [
    "!",
    " :)",
]

const loginForm = document.querySelector("#login-form");
const loginText = document.querySelector("#login-form input[type=text]");
const loginBtn = document.querySelector("#login-form input[type=submit]");

const greetingBox = document.querySelector(".center > div");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

// Random greeting
const choseGreeting = greetings[Math.floor(Math.random() * greetings.length)];
const choseGreetingSub = greetingsSub[Math.floor(Math.random() * greetingsSub.length)];

// Login when click submit BTN
function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // Save and Print
    const userName = loginText.value;
    localStorage.setItem(USERNAME_KEY, userName);
    printGreetings(userName);
}

// Print greeting
function printGreetings(name) {
    greeting.innerText = `${choseGreeting} ${name}${choseGreetingSub}`;
    greetingBox.classList.remove(HIDDEN_CLASSNAME);
    toDoBox.classList.remove("logout");
    toDoTitle.innerText = "To Do List";

    // Print setting BTN when login
    setting.classList.remove(HIDDEN_CLASSNAME);
    
    // Print lucky when login
    savedLucky = JSON.parse(localStorage.getItem(LUCKY_KEY));
    printLucky(savedLucky);
}

// Saved user in local-storage
const savedUsername = localStorage.getItem(USERNAME_KEY);

// Check user exists in local-storage
if (savedUsername === null) {
    // Print login form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    
    // Inform to to-do-list box when logout
    toDoBox.classList.add("logout");
    toDoTitle.innerText = "Please Login";
    
    // Block lucky when logout
    modalLuckyText.innerText = "Please Login";
    modalLuckyText.style.userSelect = "none";

    // Block setting BTN when logout
    setting.classList.add(HIDDEN_CLASSNAME);
} else {
    printGreetings(savedUsername);
}