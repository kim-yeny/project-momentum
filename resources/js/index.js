const body = document.querySelector("body");

const topper = document.querySelector(".top");
const left = document.querySelector(".left");
const center = document.querySelector(".center");
const right = document.querySelector(".right");
const bottom = document.querySelector(".bottom");

const toDoBox = document.querySelector(".to-do-list");
const newNameForm = document.querySelector("#name-form");
const nameText = document.querySelector("#name-form input[type=text]");
const btnClose = document.querySelectorAll(".btn-close");

const HIDDEN_CLASSNAME = "hidden";
const ACTIVE_CLASSNAME = "active";

// Open modal
function layerOpen(name) {
    const layer = document.querySelector(`.layer-${name}`);
    layer.classList.remove(HIDDEN_CLASSNAME);
    layer.classList.add(ACTIVE_CLASSNAME);
}

// CLose modal
function layerClose(name) {
    const layer = document.querySelector(`.layer-${name}`);
    layer.classList.remove(ACTIVE_CLASSNAME);
    layer.classList.add(HIDDEN_CLASSNAME);
}

// Reset all data
function reset() {
    const resetConfirm = confirm("Reset will delete all data and name from Momentum. Are you sure you want to reset?");
    if (resetConfirm) {
        localStorage.clear();
        location.reload();
    }
    else {
        return false;
    };
}

// Click <Change name>
function changeName() {
    greetingBox.classList.add(HIDDEN_CLASSNAME);
    newNameForm.classList.remove(HIDDEN_CLASSNAME);
    newNameForm.addEventListener("submit", changeNameSubmit);
}

// Update user-name
function changeNameSubmit(e) {
    e.preventDefault();

    const newName = nameText.value;
    localStorage.setItem(USERNAME_KEY, newName);
    printGreetings(newName);

    newNameForm.classList.add(HIDDEN_CLASSNAME);
}

// Close modal
btnClose.forEach(function(e) {
    e.addEventListener("click", function() {
        e.parentElement.classList.remove(ACTIVE_CLASSNAME);
        e.parentElement.classList.add(HIDDEN_CLASSNAME);
    });
});

// Close elements when click to center area
center.addEventListener("click", function() {
    toDoBox.classList.remove(ACTIVE_CLASSNAME);
    toDoBox.classList.add(HIDDEN_CLASSNAME);
    layerClose("lucky");
});

// Open To-Do-List when click to left side
left.addEventListener("click", function() {
    toDoBox.classList.remove(HIDDEN_CLASSNAME);
    toDoBox.classList.add(ACTIVE_CLASSNAME);
});