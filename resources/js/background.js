const images = [
    {
        img: "background (1).jpg",
        text: "#fff"
    },
    {
        img: "background (2).jpg",
        text: "#fff"
    },
    {
        img: "background (3).jpg",
        text: "#fff"
    },
    {
        img: "background (4).jpg",
        text: "#fff"
    },
    {
        img: "background (5).jpg",
        text: "#fff"
    },
    {
        img: "background (6).jpg",
        text: "#fff"
    },
    {
        img: "background (7).jpg",
        text: "#fff"
    },
    {
        img: "background (8).jpg",
        text: "#fff"
    },
    {
        img: "background (9).jpg",
        text: "#000"
    },
    {
        img: "background (10).jpg",
        text: "#000"
    },
    {
        img: "background (11).jpg",
        text: "#fff"
    },
    {
        img: "background (12).jpg",
        text: "#fff"
    },
    {
        img: "background (13).jpg",
        text: "#000"
    },
    {
        img: "background (14).jpg",
        text: "#fff"
    },
    {
        img: "background (15).jpg",
        text: "#000"
    },
];

// Get element from HTML
const centerTitle = document.querySelector(".center span");

// Random img
const choseImage = images[Math.floor(Math.random() * images.length)];

// Add <img> element
const bgImage = document.createElement("img");
bgImage.src = `./resources/img/${choseImage.img}`;

// Print random img
center.appendChild(bgImage);

// Apply color
document.documentElement.style.setProperty("--text-sub-color", choseImage.text);