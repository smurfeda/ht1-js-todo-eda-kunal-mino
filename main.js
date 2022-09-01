const data = [
  { id: 1, todo: "go to Hampstead Heath" },
  { id: 2, todo: "play with Kabir" },
];

let ul = document.querySelector("#list");
//mapping through data array and creating a new li for each 'todo' value 
data.map(function (item) {
  let newLi = document.createElement("li");
  newLi.innerText = item.todo;
  ul.appendChild(newLi);
});
 
//on click function which captures the value inputted in text field. 
// we are then pushing the user input into the array as an object
//we are then creating a li with the newly added object as the inner text and appending it the the ul tag with id '#list'
//the function is called in the 'Add Todo' button tag (line 14, index.html)
function handleClick() {
  let ul = document.querySelector("#list");
  let inputValue = document.querySelector("#todoField").value;
  data.push({id:data.length+1, todo:inputValue})
  console.log("data:", data)
  let newLi = document.createElement("li");
  newLi.innerText = data[data.length-1].todo;
  ul.appendChild(newLi);
}
