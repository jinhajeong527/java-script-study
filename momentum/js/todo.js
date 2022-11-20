const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
// 이전에 로컬 스토리지에 저장된 할일 목록이 있을 경우 해당 배열에 업데이트 하기 위해서 let으로 배열 선언함.
let toDos = [];
// paintToDo() 호출 될 때마다 로컬 스토리지에 저장할 투두리스트 담을 배열
// 로컬 스토리지에는 배열을 저장할 수 없고 스트링만 저장할 수 있다. 
// * JSON.stringify()를 사용하는 이유
// 자바 스트립트 배열 및 오브젝트를 스트링으로 만들어준다.
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) { // event 안에 어떤 버튼 클릭한 건지 알 수 있는 정보 또한 담겨있다.
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos(); // toDos 배열 저장 결과를 로컬 스토리지에도 반영한다.
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; // 지울 때 사용할 아이디 심어준다.
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    // 버튼 이모티콘으로 추가한다.
    button.innerText = "❌";
    // 클릭 이벤트 추가한다.
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; // 인풋창 비우기

    // 투두 리스트 삭제 시에 로컬 스토리지에서도 삭제하기 위해
    // 아이디까지 포함한 오브젝트로 toDos에 push 해준다.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    // 기존 비어있던 toDos 배열에 새롭게 할일 추가함.
    toDos.push(newTodoObj);
    // html 작성시 해당 오브젝트의 id 사용할 것이다.
    paintToDo(newTodoObj);
    // 로컬 스토리지에 저장한다.
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 어떤 행동 하기 전까지는 함수가 호출되지 않을 것이고
// 페이지 로드되고 나서 여기서 로컬 스토리지에 todos 배열에
// 값이 존재하면 얻어와서 toDos에 이미 담고 있을 것이다.
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) { // 로컬 스토리지에 저장된 투두리스트가 있을 경우
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // 자바 스크립트에서 배열 안의 스트링 엘리먼트를 하나씩 넘겨줄 것이다.
    parsedToDos.forEach(paintToDo);
}

// return true if item on the array should stay
function chceckIfThisListShouldStay(todo, liId) {
    console.log({todo});
    console.log({liId});
    return todo.id !== liId;
}