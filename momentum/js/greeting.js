const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const courseLink = document.querySelector("#courseLink");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { // 엔터 누르거나, 서브밋 버튼 누를 때 해당 이벤트가 작동할 것이다. 
    event.preventDefault(); // * 브라우저의 디폴트 behavior를 멈출 것이다. => 여기서는 폼을 서브밋하는 행위가 될 것이다.
    // * 서브밋 이벤트를 컨트롤 할 수 있게 된다. 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typedUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typedUsername);
    paintGreetings(typedUsername);
}

function handleCourseLinkClick(event) {
    event.preventDefault(); // prevent Browser from going to this link..
}

// no press play needed when using event listener
// 브라우저가 대신 내 function을 호출해주는데, onLoginSubmix(xxxxx) : with some extra info가 추가되어 있다.
// 이 정보 정말 많이 사용될 것이므로 잘 알고있어야 한다. 
// * 이벤트 리스너의 첫번째 인자는 : information about what just happened
// * 나는 내 함수에 첫번째 인자를 설정해 주기만 하면, 자바 스크립트가 해당 인자를 당장 발생한 이벤트에 대한 정보로 채울 것이다. 
function paintGreetings(username) {
    // * 1) 백틱(``) 2) ${변수} => 이렇게 사용해야 한다.
    greeting.innerText = `Hello ${username}`; // 백틱을 사용하면 스트링 안에 변수를 넣을 수 있다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
// tiny database that browser has
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // add event listener for waiting for someone to submit
    loginForm.addEventListener("submit", onLoginSubmit); 
} else {
    // show the greetings
    paintGreetings(savedUsername);
}

courseLink.addEventListener("click", handleCourseLinkClick);
