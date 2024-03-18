let addItem = document.querySelector(".add_items");
let listContainer = document.querySelector(".li_container");

// on click of enter also check add the item
addItem.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  console.log("on addTask");
  if (addItem.value == "") {
    alert("Please write some text");
  } else {
    let li = document.createElement("li");
    li.innerHTML = addItem.value;
    listContainer.appendChild(li);

    //to create a cross items
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    li.appendChild(span);
  }

  addItem.value = "";
  saveData();
}

// to toggle the items and delete the items from list

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      let input = prompt(
        "Are you sure you want to delete this item ? (yes/no)"
      );

      if (input === "yes") {
        e.target.parentElement.remove();
        saveData();
      }
    }
  },
  false
);

//to save the list item in local storage so that even when refreshed
// the data is saved

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// to show the saved data from local storage

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();
