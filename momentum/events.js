const h1 = document.querySelector(".hello h1");
console.log(h1);
console.dir(h1);

function handleh1Click() {
    h1.style.color = "blue";
    console.log("h1 was clicked!");
}

function handleMouseEnter() {
    h1.innerText = "Mouse Is Here";
}

function handleMouseLeave() {
    h1.innerText = "Mouse Is Gone!"
}

//h1.addEventListener("click", handleh1Click);
h1.onclick = handleh1Click; // 이렇게 작성할 수도 있음.
//h1.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);

// window resize하면 백그라운드 컬러를 토마토 색으로 바꿔버린다. 
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
// window resize
window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
    alert("copier!"); // command + c 하면 알러트 창 뜰 것이다.
}
// clipboard events : copy
window.addEventListener("copy", handleWindowCopy);

function handleWindowOffline() {
    alert("SOS no wifi!");
}
function handleWindowOnline() {
    alert("ALL GOOD! Can't Complain!!!!!");
}
// connection events : offline, online
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);




