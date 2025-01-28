// Light/Dark Mode Button
const toggleButton = document.getElementById('toggle-button');
const body = document.querySelector('body');

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleButton.innerHTML = 'Light Mode <i class="fa-solid fa-sun"></i>';
} else {
    toggleButton.innerHTML = 'Dark Mode <i class="fa-solid fa-moon"></i>';
}

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        toggleButton.innerHTML = 'Dark Mode <i class="fa-solid fa-moon"></i>';
    } else {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        toggleButton.innerHTML = 'Light Mode <i class="fa-solid fa-sun"></i>';
    }
});

// ADD Task Button 

function addNewTask() {
    const inputContainer = document.getElementById('new-task-field');

    // Prevent multiple input fields
    if (inputContainer.querySelector('.task-input')) {
        const taskModal = new bootstrap.Modal(document.getElementById('task-modal'));
        taskModal.show();
        return;
    }

    // Create the task input field
    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('placeholder', 'Enter a new task...');
    taskInput.setAttribute('required', '');
    taskInput.classList.add('task-input', 'form-control', 'w-50');
    inputContainer.appendChild(taskInput);

    // Create the "Add Task" button
    const addButton = document.createElement('button');
    addButton.innerHTML = '<i class="fa-solid fa-plus"></i>';
    addButton.classList.add('btn', 'btn-primary');
    addButton.setAttribute('id', 'add-new-task-btn');

    // Attach event listener for adding a task
    addButton.addEventListener('click', appendNewTask);

    inputContainer.appendChild(addButton);
}

function appendNewTask() {
    const taskInput = document.querySelector('.task-input'); // Correct scope
    const tasksContainer = document.getElementById('tasks-container');

    if (taskInput && taskInput.value.trim()) {
        // Create a task card
        const taskItem = document.createElement('div');
        taskItem.classList.add('card', 'task-card', 'mb-2', 'p-2', 'd-flex', 'align-items-center', 'justify-content-center');

        // Add task text
        const taskText = document.createElement('p');
        taskText.textContent = taskInput.value.trim();
        taskText.classList.add('mb-5');
        taskItem.appendChild(taskText);

        // Add completed button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        completedButton.classList.add('btn', 'btn-success',);
        taskItem.appendChild(completedButton);

        // Completed task functionality
        completedButton.addEventListener('click', () => {
            taskItem.classList.add('completed');
        });

        // Append the task to the container
        tasksContainer.appendChild(taskItem);

        // Clear the input and remove input/button
        taskInput.value = '';
        taskInput.parentElement.removeChild(taskInput);
        const addButton = document.getElementById('add-new-task-btn');
        addButton.parentElement.removeChild(addButton);
    } else {
        alert('Please enter a task!');
    }
}
