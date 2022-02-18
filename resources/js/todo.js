const toDoForm = document.querySelector('#to-do-form');
const toDoTitle = document.querySelector(".to-do-list span");
const toDoInput = document.querySelector('#to-do-form input');
const toDoList = document.querySelector('.to-do-list #list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
  
function deleteToDO(e) {
    // 함수 호출 시, event는 target을 제공
    // target 중 부모 요소에 접근하여 li 변수에 저장
    const li = e.target.parentElement;

    // 배열 속 오브젝트의 id와 li의 id를 비교하여 삭제
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();

    saveToDos();
}

function paintToDo(newTodo) {
    // HTML에 li, span, button 생성
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    li.appendChild(button);

    toDoList.appendChild(li);

    // button 클릭시, 삭제 이벤트 호출
    button.addEventListener('click', deleteToDO)
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

toDoForm.addEventListener('submit', handleToDoSubmit);

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