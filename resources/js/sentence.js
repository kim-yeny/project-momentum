const sentences = [
    'No pain, No gain',
    'Have a good day!',
    'Good luck to you!',
    'Follow your heart',
    'Past is just past',
    'Life is a journey',
    'Love what you have',
    'No sweat, No sweet',
    'You only live once',
    'Believe in yourself',
];

// Get element from HTML
const rightBox = document.querySelector('.right div');

// Random sentence
const choseSentence = sentences[Math.floor(Math.random() * sentences.length)];

// Print random sentence
for (var i = 0; i < 5; i++) {
    const sentence = document.createElement('span');
    sentence.innerText = choseSentence;
    rightBox.appendChild(sentence);
}
