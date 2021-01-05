const toDoForm = document.querySelector(".js_toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODOS_LS = "toDos";

//const toDos = []; const cannot be changed so make it to let
let toDos = [];

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        //JSON.parse=makes a string to an object
        parsedToDos.forEach(function(toDo) { //for each variable in an array.
            //console.log(toDo.text);
            //console.log(toDo.id);
            paintToDo(toDo.text);
        })
    }
}

function filterfn(toDo) {
    return toDo.id === 1;
    //only return if id =1 


}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //JSON.stringify= turns any JS object to a string
}

function deleteToDos(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
        //makes an array that doesnt include the deleted li
        //parseInt makes a value into a int
    }); //calls filterfn function
    toDos = cleanToDos;
    saveToDos(); //resave ToDos

    //console.log(cleanToDos);

    //console.log(event.target.parentNode);
    //toDos.filter() filter runs a function for each item. filter will create an array with the items that return true (id that is in toDos)
    //toDoList.removeChild(li); deletes the child in the toDoList
    //parenNode shows which li the button was from (parentNode) button in this case is child element
    //console.dir(event.target);
    //console.dir = shows information about the button
    //event.target= shows the button that was clicked

}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = ":x:";
    delBtn.addEventListener("click", deleteToDos);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li); //li is parent, btn is child

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();