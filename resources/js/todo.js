const toDoForm = document.querySelector("#to-do-form");
const toDoTitle = document.querySelector(".to-do-list span");
const toDoInput = document.querySelector("#to-do-form input");
const toDoList = document.querySelector(".to-do-list #list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function updateToDos(e) {
    const content = e.innerText;
    const li = e.parentElement.getAttribute("id");
    const getData = toDos.find(toDos => toDos.id == li);
    getData.text = content;
    saveToDos();
    e.setAttribute("contenteditable", "false");
}

function clickEdit(e) {
    const span = e.target.parentElement.previousSibling;
    const attr = span.getAttribute("contenteditable");
    
    if (attr === "true") {
        // Click the button after editing the data - Save data
        updateToDos(span);
    } else {
        // Click the button without modifying the data - Focus <span>
        span.setAttribute("contenteditable", "true");
        span.focus();
    }
}

function editToDo(e) {
    const span = e.target;
    span.setAttribute("contenteditable", "true");
}

function toDoEnterKey(e) {
    if (window.event.keyCode == 13) {
        // Contenteditable"s <div> remove
        const spansDiv = e.childNodes[1];
        spansDiv.remove();

        // Apply modifyed data
        updateToDos(e);
    }
}

function deleteToDo(e) {
    const deleteConfirm = confirm("Are you sure you want to delete?");
    if (deleteConfirm) {
        const li = e.target.parentElement.parentElement;
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
    span.setAttribute("onkeyup", "toDoEnterKey(this)");
    li.appendChild(span);
    span.innerText = newTodo.text;

    const btnBox = document.createElement("div");
    li.appendChild(btnBox);

    // BTN Edit
    const btnEdit = document.createElement("button");
    btnEdit.innerText = "📝";
    btnEdit.classList.add("btnEdit");
    btnBox.appendChild(btnEdit);

    // BTN Delete
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("button");
    btnDelete.innerText = "❌";
    btnBox.appendChild(btnDelete);

    toDoList.appendChild(li);

    // Modify list when click edit BTN
    span.addEventListener("click", editToDo);
    btnEdit.addEventListener("click", clickEdit);

    // Delete list when click delete BTN
    btnDelete.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(e) {
    e.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    saveToDos();

    paintToDo(newTodoObj)
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
