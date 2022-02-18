const colors = [
    {
        back: '#600386',
        text: '#fff'
    },
    {
        back: '#9E41C5',
    },
    {
        back: '#971958',
        text: '#fff'
    },
    {
        back: '#E593B8',
    },
    {
        back: '#BC3131',
        text: '#fff'
    },
    {
        back: '#DB6D4F',
    },
    {
        back: '#F37319',
        text: '#fff'
    },
    {
        back: '#EAB81B',
    },
    {
        back: '#E3EB49',
    },
    {
        back: '#AEF239',
    },
    {
        back: '#2AC972',
    },
    {
        back: '#00A876',
    },
    {
        back: '#286343',
        text: '#fff'
    },
    {
        back: '#208980',
    },
    {
        back: '#136096',
        text: '#fff'
    },
    {
        back: '#5680EC',
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
