
const data = [{id:1, todo:"walk the dog"},{id:2, todo:"eat dinner"}]

document.title = "My Todo List";
// const input = document.createElement("input");
// input.type = "text"
// document.body.appendChild(input);

// const button = document.createElement("button");
// button.textContent = 'Add Task';
// // button.innertext = "Add Task"
// document.body.appendChild(button);

// button.addEventListener("click", handleClick)


function handleClick (){
    console.log("this is working")
    let ul = document.querySelector("#lists")
    let inputValue = document.querySelector("#todoField").value
    let newLi = document.createElement("li");
    newLi.innerText = inputValue
    ul.appendChild(newLi);
    
    // data.map(function(todo){
    //     return newLi
    // })
}


