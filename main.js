const data = [
  { id: 1, todo: "go to Hampstead Heath" },
  { id: 2, todo: "play with Kabir" },
];

let ul = document.querySelector("#list");
 
function handleClick() {
  console.log("this is working");
  let ul = document.querySelector("#list");
  let inputValue = document.querySelector("#todoField").value;
  data.push({id:data.length+1, todo:inputValue})
  console.log("data:", data)
  let newLi = document.createElement("li");
  newLi.innerText = data[data.length-1].todo;
  ul.appendChild(newLi);
}
    data.map(function (item) {
    let newLi = document.createElement("li");
    newLi.innerText = item.todo;
    ul.appendChild(newLi);
  });


// What the function is doing: Lines 18- 27
// this function is called to action in the button section in HTML file
// We are getting the value from the user input and then displaying as li
// When we click the button, we are selecting the ul with the id 'list' and 
// grabbing the input from the user and storing it in inputValue 
// And then adding the new li under the ul


//Below is the refactored code of map method with the for loop

// for (i = 0; i < data.length ; i++){
//     let ul = document.querySelector("#list");
//     let newLi = document.createElement("li");
//     newLi.innerText = data[i].todo;
//     ul.appendChild(newLi);
// }

// We are grabbing the ul with the id 'list'
// Then we are mapping through the 'data' array with the mappin array method.
// Map method needs a callback function. Item is the placeholder. 
// Item is the equivalent of data[i] in the for loop. Items represent each object.
// We are creating a variable to store the new li element 
// With the newLi, the inner text shows the todo from the data array
// Then we are putting the new li underneath the old ul