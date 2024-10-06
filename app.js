const taskInput = document.getElementById('task-input')
const addTaskBtn = document.getElementById('add-task')
const taskList = document.getElementById('task-list')

addTaskBtn.addEventListener('click', function() { // adding a event listener to the button that will fire a function when clicked
const taskText = taskInput.value // gets value from the input 
if(taskText.trim() !== ''){
    const newTask = document.createElement('li')
    newTask.textContent = taskText
    taskList.appendChild(newTask)
    taskInput.value = ''
}else {
    alert('Please enter a task')
}
})