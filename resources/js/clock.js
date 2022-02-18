const weekly = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const clock = document.querySelector('#clock');
const today = document.querySelector('#today');

const date = new Date();

function getClock() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const week = weekly[date.getDay()];
    today.innerText = `${year}.${month}.${day} ${week}`;
}

getClock();
setInterval(getClock, 1000);