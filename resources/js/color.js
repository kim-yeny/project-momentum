const colors = [
    {
        back: '#600386',
        text: '#fff'
    },
    {
        back: '#9E41C5',
        text: '#000'
    },
    {
        back: '#971958',
        text: '#fff'
    },
    {
        back: '#E593B8',
        text: '#000'
    },
    {
        back: '#BC3131',
        text: '#fff'
    },
    {
        back: '#DB6D4F',
        text: '#000'
    },
    {
        back: '#F37319',
        text: '#fff'
    },
    {
        back: '#EAB81B',
        text: '#000'
    },
    {
        back: '#E3EB49',
        text: '#000'
    },
    {
        back: '#AEF239',
        text: '#000'
    },
    {
        back: '#2AC972',
        text: '#000'
    },
    {
        back: '#00A876',
        text: '#000'
    },
    {
        back: '#286343',
        text: '#fff'
    },
    {
        back: '#208980',
        text: '#000'
    },
    {
        back: '#136096',
        text: '#fff'
    },
    {
        back: '#5680EC',
        text: '#000'
    },
    {
        back: '#182CCD',
        text: '#fff'
    },
    {
        back: '#1A2359',
        text: '#fff'
    },
];

// Random color
const choseColor = colors[Math.floor(Math.random() * colors.length)];

// Apply color
document.documentElement.style.setProperty('--main-color', choseColor.back);
document.documentElement.style.setProperty('--text-color', choseColor.text);
