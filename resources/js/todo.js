const toDoForm = document.querySelector("#to-do-form");
const toDoTitle = document.querySelector(".to-do-list span");
const toDoInput = document.querySelector("#to-do-form input");
const toDoList = document.querySelector(".to-do-list #list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function modifyToDo(e) {
    const span = e.target.parentElement.previousElementSibling;
    span.setAttribute("contenteditable", "true");
}

function deleteToDo(e) {
    const deleteConfirm = confirm("Are you sure you want to delete?");
    if (deleteConfirm) {
        const li = e.target.parentElement.parentElement;

        // 배열 속 오브젝트의 id와 li의 id를 비교하여 삭제
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
        li.remove();

        saveToDos();
    }
    else {
        return false;
    };
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo.text;

    const btnBox = document.createElement("div");
    li.appendChild(btnBox);

    // BTN Modify
    const btnModify = document.createElement("button");
    btnModify.innerText = "📝";
    btnBox.appendChild(btnModify);

    // BTN Delete
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("button");
    btnDelete.innerText = "❌";
    btnBox.appendChild(btnDelete);

    toDoList.appendChild(li);

    // Modify list when click modify BTN
    btnModify.addEventListener("click", modifyToDo);

    // Delete list when click delete BTN
    btnDelete.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(e) {
    e.preventDefault();

    // input 값을 변수에 저장 후, input 비우기
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    // 랜덤 id를 가진 newTodo를 오브젝트로 생성
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    // 오브젝트를 toDos 배열에 저장
    // 로컬스토리지에 toDos 저장
    toDos.push(newTodoObj);
    saveToDos();

    // 리스트 생성하는 함수 호출
    paintToDo(newTodoObj)
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬스토리지에서 데이터 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

// 로컬스토리지가 비어있지않다면
if (savedToDos !== null) {
    // 데이터 문자열을 배열로 변환하고
    const parsedToDos = JSON.parse(savedToDos);
    // 기존 데이터를 toDos 배열에 추가
    toDos = parsedToDos;
    // 배열 개수만큼 forEach로 화면에 출력
    parsedToDos.forEach(paintToDo);
}