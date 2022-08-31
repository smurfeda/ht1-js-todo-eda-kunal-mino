import data from './data'

document.title = "My Todo List";
const input = document.createElement("input");
input.type = "text"
document.body.appendChild(input);

const button = document.createElement("button");
button.textContent = 'Add Task';
// button.innertext = "Add Task"
document.body.appendChild(button);

data.map(function(item){
return <li>{item.todo}</li>
})
