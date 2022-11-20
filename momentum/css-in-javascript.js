const h1 = document.querySelector(".hello h1");

/*
function handleMouseClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor; // **javascript에서 css를 바꾸는 것은 good practice가 아니다. 
}
*/
/*
function handleMouseClick() {
    const className = h1.className;
    const clickedClass = "clicked";
    if(className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
    //** 클래스이름으로 조건 걸어주었기 떄문에 error prone 하다.
    //** raw value이다. 프로그래머가 chose to write하기로 한 것이다. 
    //** const clickedClass = "clicked";=> 이렇게 변수 선언해서 사용해주어야 한다. 
    //** 변수 이름에 타이포가 있을 경우에는 자바 스크립트가 말해줄 것이다. (not defined error)
    //** 발생할 수 있는 버그 : 이미 클래스 이름이 있는 상태였다면?(funny-font)
    //** className을 대체할 것이다. didnt care about the past...
    //** 클래스 이름 추가할 때마다 자바스크립트를 업데이트 해야하는 것은 매우 번거로운 일이 될 것이다. 
    //** 즉 old class name을 자바스크립트가 대체하게 하면 안된다. 
    //** classList를 사용할 수 있다. 
}
*/
// classList : remove, add
/*
function handleMouseClick() {
    const clickedClass = "clicked";
    const classList = h1.classList;
    if(classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
} 
*/
// 이런 과정이 자스 개발자들에게 정말 많기 때문에, 더 간단한 방법이 있다 : toggle
function handleMouseClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleMouseClick);
