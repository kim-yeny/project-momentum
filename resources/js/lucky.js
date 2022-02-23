const luckys = [
    "Be careful who you trust. Salt and sugar look the same.",
    "Little by little, one travels far.",
    "If you want the rainbow you gotta put up with the rain.",
    "The road to success is always under construction.",
    "The most effective way to do it, is to do it.",
    "Joy is what happens to us when we allow ourselves to recognize how good things really are.",
    "What good are wings, without the courage to fly.",
    "Do not let making a living prevent you from making a life.",
    "You must expect great things of yourself before you can do them.",
    "Not all those who wander are lost.",
    "The only limits for tomorrow are the doubts we have today.",
    "I never dreamed about success. I worked for it.",
    "All we have to decide is what to do with the time that is given to us.",
    "Love all, trust a few, do wrong to none.",
    "It is never too late to be what you might have been.",
    "Turn your wounds into wisdom.",
    "Always do your best. What you plant now, you will harvest later.",
    "The worst enemy to creativity is self-doubt.",
    "It does not do to dwell on dreams and forget to live.",
    "You are your best thing.",
];

// Get element from HTML
const lucky = document.querySelector("#lucky");

const modalLucky = document.querySelector(".layer-lucky");
const modalLuckyText = document.querySelector(".layer-lucky span:first-child");

const LUCKY_KEY = "lucky";
const TODAY_FLAG = new Date().toISOString().substring(0, 10);

// Random lucky
let todayLucky = {};

// Save Today"s lucky
function saveLucky() {
    const modalLuckyText = luckys[Math.floor(Math.random() * luckys.length)];

    const todayLucky = {
        text: modalLuckyText,
        date: TODAY_FLAG,
    };

    localStorage.setItem(LUCKY_KEY, JSON.stringify(todayLucky));
    modalLuckyText.innerText = todayLucky.text;
}

// Check lucky"s date in locaStorage
function checkLuckyDate() {
    const savedLuckyDate = savedLucky.date;

    if (savedLuckyDate == TODAY_FLAG) {
        return true;
    } else {
        localStorage.removeItem(LUCKY_KEY);
        saveLucky();
    };
}

// Print lucky
function printLucky(savedLucky) {
    todayLucky = savedLucky;
    modalLuckyText.innerText = todayLucky.text;
}

// Get lucky from localStorage
let savedLucky = JSON.parse(localStorage.getItem(LUCKY_KEY));

if (savedLucky !== null) {
    checkLuckyDate();
    printLucky(savedLucky);
} else {
    saveLucky();
}