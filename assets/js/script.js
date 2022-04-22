var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIdCounter=0;

var taskFormHandler = function (event) {

    event.preventDefault(); //prevents default behaviour of browser which refreshes browser on form submission (which is the event here)

    var taskNameInput = document.querySelector("input[name='task-name']").value; // [these square brackets] are used to querySelect an HTML element by it's attribute, in this case the input name
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //check if input values are empty

    if (!taskNameInput || !taskTypeInput) {
        alert("you need to fill out the task form!");
        return false; //stops if function and returns a value of false
    }

    formEl.reset();//clears the form after the task is submitted, reset is a DOM method specific to form elements
    
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

    // add task id as a custom attribute using data attributes
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    // create div to hold task info and add to list item, give it a class name
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className="task-info";
    //add html content to div
    taskInfoEl.innerHTML= "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
        //innerHTML allows us to add html tags vs textContent which adss text strings

    //add the div with HTML content to the li item
    listItemEl.appendChild(taskInfoEl);

    // callback function to create task action buttons and drop down

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionEl);

    tasksToDoEl.appendChild(listItemEl);

    //append the li item to the ul
    tasksToDoEl.appendChild(listItemEl);

    // increase task counter to create next unique id
    taskIdCounter++;

};

var createTaskActions = function(taskId) {
        // create contianer for the edit button and delete button for each task
        var actionContainerEl = document.createElement("div");
        actionContainerEl.className = "task-actions";
    
        //create edit button code and append to parent container
        var editButtonEl = document.createElement("button");
        editButtonEl.textContent= "edit";
        editButtonEl.className = "btn edit-btn";
        editButtonEl.setAttribute("data-task-id", taskId)
    
        actionContainerEl.appendChild(editButtonEl);
    
        //create delete button and append to parent container
        var deleteButtonEl= document.createElement("button");
        deleteButtonEl.textContent="Delete";
        deleteButtonEl.className="btn delete-btn";
        deleteButtonEl.setAttribute("data-task-id", taskId);
    
        actionContainerEl.appendChild(deleteButtonEl);

        //create task status dropdown and append to container
        var statusSelectEl = document.createElement("select");
        statusSelectEl.className="select-status";
        statusSelectEl.setAttribute("data-task-id", taskId);

        actionContainerEl.appendChild(statusSelectEl);

        //array for task status drop down options
        var statusChoices = ["To Do", "In Progress", "Completed"];

        //for loop to create task status drop down options

        for (i=0; i<statusChoices.length; i++) {
            //create option elements
            var statusOptionEl = document.createElement("option");
            statusOptionEl.textContent= statusChoices[i];
            statusOptionEl.setAttribute("value", statusChoices[i]);

            //append the options to the task status drop down
            statusSelectEl.appendChild (statusOptionEl);

        }

        return actionContainerEl;

}

formEl.addEventListener("submit", taskFormHandler); //submit listener works when user clicks button with type 'submit' or enter is pressed