const city = document.querySelector('#weather span:first-child');
const weather = document.querySelector('#weather span:last-child');

const API_KEY = '9182c63cc1b9cc0942c3594e653733ba';

// 권한 허용
function onGeoAllow(position) {
    // JS 기본 내장함수를 이용하여 경·위도 구하기
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // 경·위도와 api키를 이용하여 url 생성
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    // JS에서 url 접근을 명령
    // 응답받은 json
    fetch(url).then((reponse) => reponse.json()).then((data) => {
        // 응답받은 json에서 필요한 데이터를 HTML에 출력
        city.innerText = data.name;
        weather.innerText = `, ${data.weather[0].main} (${data.main.temp}˚)`;
    });
}

// 권한 차단
function onGeoError() {
    weather.innerText = `No weather for you`;
}

// JS 기본 내장함수 사용
// 필수 파라미터가 필요
navigator.geolocation.getCurrentPosition(onGeoAllow, onGeoError);
