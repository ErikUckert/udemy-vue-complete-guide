// create consts for the used dom elements
const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

// function for adding new list items from input
function addGoal() {
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement("li");
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", addGoal);

