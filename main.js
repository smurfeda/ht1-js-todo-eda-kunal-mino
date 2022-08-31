
const data = [{id:1, todo:"walk the dog"},{id:2, todo:"eat dinner"}]

document.title = "My Todo List";
const input = document.createElement("input");
input.type = "text"
document.body.appendChild(input);

const button = document.createElement("button");
button.textContent = 'Add Task';
// button.innertext = "Add Task"
document.body.appendChild(button);

button.addEventListener("click", handleClick)


function handleClick (){
    const newLi = document.createElement("li");
    // newLi.innerText = "walk the dog"
    document.body.appendChild(newLi)
    
    // data.map(function(todo){
    //     return newLi
    // })
}


