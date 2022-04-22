var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {

    event.preventDefault(); //prevents default behaviour of browser which refreshes browser on form submission (which is the event here)
    console.log(event);
    var listItemEl = document.createElement("li");
    listItemEl.className="task-item";
    listItemEl.textContent="this is a new task.";
    tasksToDoEl.appendChild(listItemEl);

};

formEl.addEventListener("submit", createTaskHandler); //submit listener works when user clicks button with type 'submit' or enter is pressed

