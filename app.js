// Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks")
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener("submit", addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener("click", clearTasks);
    // Filter through tasks
    filter.addEventListener("keyup", filterTasks);
}
 
// Function: Add Task
function addTask(e) {
    e.preventDefault();
    if (taskInput.value === '') {
        alert('Add a task');
    } else {
        // Create Li Element
        const li = document.createElement('li');
        li.className = 'collection-item';
    
        // Create text node and append to the li
        li.appendChild(document.createTextNode(taskInput.value));
    
        // Create new link element
        const link = document.createElement('a');
        link.className = 'delete-item';
        link.style.color = "white";
        link.style.marginLeft = "1rem";
        link.style.border = "none";
        link.style.backgroundColor = "red";
        link.appendChild(document.createTextNode('X'));
    
        // Add the just created link to the list element (li)
        li.appendChild(link);
    
        // Add the li to ul
        taskList.appendChild(li);
    
        // Clear Input
        taskInput.value = "";
    }

} 

// Function; Remove Task
function removeTask(e) {
    if(e.target.classList.contains("delete-item")) {
        if(confirm("Are You Sure you want to delete this task?")) {
            e.target.parentElement.remove();
        }
    }
}

// Function: Clear Tasks
function clearTasks(e) {
    // Using While Loop to iterate through and remove li elements.
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Function: Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none';
        }
    });
}