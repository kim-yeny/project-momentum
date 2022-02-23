const quotes = [
    {
        quote: "Only a life lived for others is a life worth while.",
        author: "Albert Einstein"
    },
    {
        quote: "If you would be loved, love and be lovable.",
        author: "Benjamin Franklin"
    },
    {
        quote: "The important thing was to love rather than to be loved.",
        author: "William Somerset Maugham"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "Life is either a daring adventure or nothing.",
        author: "Helen Keller"
    },
    {
        quote: "Life is what happens to you while you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "I hear and I forget. I see and I remember. I do and I understand.",
        author: "Confucius"
    },
    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin"
    },
    {
        quote: "People fail forward to success.",
        author: "Mary Kay Ash"
    },
    {
        quote: "A mind troubled by doubt cannot focus on the course to victory.",
        author: "Arthur Golden"
    },
    {
        quote: "A goal without a plan is just a wish.",
        author: "Antoine de Saint-Exupery"
    },
    {
        quote: "Misfortune shows those who are not really friends.",
        author: "Aristotle"
    },
    {
        quote: "Be slow in choosing a friend, slower in changing.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Life-transforming ideas have always come to me through books.",
        author: "Bell Hooks"
    },
    {
        quote: "Those who cannot remember the past are condemned to repeat it.",
        author: "George Santayana"
    },
    {
        quote: "Nothing is a waste of time if you use the experience wisely.",
        author: "Auguste Rodin"
    },
    {
        quote: "Regret for wasted time is more wasted time.",
        author: "Mason Cooley"
    },
    {
        quote: "God doesn't require us to succeed; he only requires that you try.",
        author: "Mother Teresa"
    },
    {
        quote: "He who has never hoped can never despair.",
        author: "George Bernard Shaw"
    },
    {
        quote: "The greatest risk is the risk of riskless living.",
        author: "Stephen Covey"
    },
    {
        quote: "The gratification comes in the doing, not in the results.",
        author: "James Dean"
    },
    {
        quote: "Respect yourself and others will respect you.",
        author: "Confucius"
    },
];

// Get element from HTML
const quote = document.querySelector(".bottom .quote");
const author = document.querySelector(".bottom .author");

// Random quote
const choseQoute = quotes[Math.floor(Math.random() * quotes.length)];

// Print random quote
quote.innerText = choseQoute.quote;
author.innerText = `(${choseQoute.author})`;
