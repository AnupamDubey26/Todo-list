//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);              //'=""
filterOption.addEventListener("click", filterTodo);


//functions
function addTodo(event){

event.preventDefault(); //prevet form from from submitting
    const todoDiv= document.createElement("div"); //creating todoDiv
    todoDiv.classList.add("todo");
    //create li
    const newTodo= document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //add todo to local storage
     //saveLocalTodos(todoInput.value); //storage
    //check mark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<img  class="check" src="https://img.icons8.com/windows/32/000000/--checkmark-yes.png"/>'; //check icon
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<img  class="trash" src="https://img.icons8.com/android/32/000000/trash.png"/>'; //trash icon
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value="";
}

function deleteCheck(e){
    const item = e.target;
    //delete item 
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
        todo.remove();
        });

        // todo.remove();
    }

    //check mark
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos= todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "Completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                    
                }
                else{
                    todo.style.display="none";
                }
                break;
            case "Uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }
                break;
        }
    });

}


//local Storage


// function saveLocalTodos(todo){
//     //chech ---do i already have thing in there
//     let todos;
//     if(localStorage.getItem('todos')===null){
//         todos = [];
//     }
//     else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringfy(todos));
// }