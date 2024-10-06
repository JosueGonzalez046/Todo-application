// selecting the html elements using the ID to manipulate them in the script
const taskInput = document.getElementById('task-input') 
const addTaskBtn = document.getElementById('add-task')
const taskList = document.getElementById('task-list')

// adding a event listener to the button that will fire a function when clicked
addTaskBtn.addEventListener('click', function() { 
const taskText = taskInput.value // gets value from the input 
if(taskText.trim() !== ''){ // makes sure its not an empty string if its not it runs function below

    // creates new li element and add the task text
    const newTask = document.createElement('li')
    newTask.textContent = taskText.toUpperCase()

    // this appends the task to the new task list
    taskList.appendChild(newTask)

    //clears the input after adding a new task
    taskInput.value = ''

    // if input is not valid alert user to enter valid task
}else {
    alert('Please enter a valid task!')
}
})