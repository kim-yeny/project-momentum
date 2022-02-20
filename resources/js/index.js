const body = document.querySelector('body');

const topper = document.querySelector(".top");
const left = document.querySelector(".left");
const center = document.querySelector(".center");
const right = document.querySelector(".right");
const bottom = document.querySelector(".bottom");

const toDoBox = document.querySelector(".to-do-list");

// Open To-Do-List when click to left side
left.addEventListener("click", function () {
    toDoBox.classList.add("active");
});

// Close To-Do-List when click to center area
center.addEventListener("click", function () {
    toDoBox.classList.remove("active");
});