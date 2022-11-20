const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,"0"); // 길이가 2여야 하고, 2가 아닐 경우 앞에 0을 붙여주어야 한다.
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = date.getSeconds().toString().padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 여기서 호출해주지 않음 00:00:00을 일 초간 봐야한다.
setInterval(getClock, 1000); // 1초마다 첫번째 인자에 넣어준 함수가 호출될 것이다.

// 자바 스크립트의 Date 오브젝트
//setTimeout(sayHello, 5000); // 5초 후에 인자에 넣어준 함수가 호출될 것이다.
