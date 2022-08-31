const data = [
  { id: 1, todo: "go to Hampstead Heath" },
  { id: 2, todo: "play with ;,,l;,;l,Kabir" },
];

document.title = "My Todo List";
// const input = document.createElement("input");
// input.type = "text"
// document.body.appendChild(input);

// const button = document.createElement("button");
// button.textContent = 'Add Task';
// // button.innertext = "Add Task"
// document.body.appendChild(button);

// button.addEventListener("click", handleClick)

function handleClick() {
  console.log("this is working");
  let ul = document.querySelector("#list");
  let inputValue = document.querySelector("#todoField").value;
  data.push(inputValue);

  let newLi = document.createElement("li");
  newLi.innerText = inputValue;
  ul.appendChild(newLi);
}

let ul = document.querySelector("#list");
data.map(function (item) {
  let newLi = document.createElement("li");
  newLi.innerText = item.todo;
  ul.appendChild(newLi);
});
