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

    //create a delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add('deleteBtn')
    // add a checked button
    const completedBtn = document.createElement('button')
    completedBtn.textContent = "Completed"
    completedBtn.classList.add('completedBtn')

    //append delete button to task item
    newTask.appendChild(deleteBtn)
    //append completed button to task item
    newTask.appendChild(completedBtn)

    // this appends the task to the new task list
    taskList.appendChild(newTask)

    // adding event listener to task list using event delegation
    taskList.addEventListener('click', function(e)  {
        // checking if the elment clicked is a delete button or completed button
        if(e.target.classList.contains('deleteBtn')) {
            //remove the task from list
            e.target.parentElement.remove()
        }else if(e.target.classList.contains('completedBtn')) {
            taskList.style.textDecoration = 'line-through'
        }
    })

    //clears the input after adding a new task
    taskInput.value = ''

    // if input is not valid alert user to enter valid task
}else {
    alert('Please enter a valid task!')
}
})

