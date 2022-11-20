const API_KEY = "89b1335bfded608525b15ba7fdb1afc4";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch는 Promise 이다. => 프로미스는 당장 일어나지 않는 것을 말한다. 
    // 시간이 좀 걸릴 것이기 때문이다. 서버에 요청을 한 것이고 요청에 응답하는데 시간이 걸릴 수 있다.
    // then을 사용하는 이유이다. 
    // java script will call the url for you
    fetch(url).then(response => response.json().then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
}
function onGeoError() {
    alert("Can't find you!");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);