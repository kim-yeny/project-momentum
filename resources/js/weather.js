const weatherBox = document.querySelector('#weather');
const city = document.querySelector('#weather span:first-child');
const weather = document.querySelector('#weather span:last-child');

const API_KEY = '9182c63cc1b9cc0942c3594e653733ba';
const BORDER_RIGHT_KEY = '3px solid var(--main-color)';

function onGeoAllow(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url).then((reponse) => reponse.json()).then((data) => {
        city.innerText = data.name;
        weather.innerText = `, ${data.weather[0].main} (${data.main.temp}˚)`;
    });
    
    weatherBox.style.borderRight = BORDER_RIGHT_KEY;
}

function onGeoError() {
    weather.innerText = `No weather for you`;
    weatherBox.style.borderRight = BORDER_RIGHT_KEY;
}

navigator.geolocation.getCurrentPosition(onGeoAllow, onGeoError);
