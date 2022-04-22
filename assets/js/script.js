var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {

    event.preventDefault(); //prevents default behaviour of browser which refreshes browser on form submission (which is the event here)

    var taskNameInput = document.querySelector("input[name='task-name']").value; // [these square brackets] are used to querySelect an HTML element by it's attribute, in this case the input name
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    //package the name and type into an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send the object as an argument to create task
    createTaskEl(taskDataObj);


};

var createTaskEl = function(taskDataObj) {

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className="task-item"

    // create div to hold task info and add to list item, give it a class name
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className="task-info";
    //add html content to div
    taskInfoEl.innerHTML= "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
        //innerHTML allows us to add html tags vs textContent which adss text strings

    //add the div with HTML content to the li item
    listItemEl.appendChild(taskInfoEl);

    //append the li item to the ul
    tasksToDoEl.appendChild(listItemEl);



}

formEl.addEventListener("submit", taskFormHandler); //submit listener works when user clicks button with type 'submit' or enter is pressed

