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

    // Preventing multiple input fields
    if (inputContainer.querySelector('.task-input')) {
        const taskModal = new bootstrap.Modal(document.getElementById('task-modal'));
        taskModal.show();
        return;
    }

    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('placeholder', 'Enter a new task...');
    taskInput.setAttribute('required', '');
    taskInput.classList.add('task-input', 'form-control', 'w-50');

    inputContainer.appendChild(taskInput);

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('required', '');
    dateInput.classList.add('date-input', 'form-control', 'w-25', 'ms-2',);

    inputContainer.appendChild(dateInput);


    const addButton = document.createElement('button');
    addButton.innerHTML = '<i class="fa-solid fa-plus"></i>';
    addButton.classList.add('btn', 'btn-primary');
    addButton.setAttribute('id', 'add-new-task-btn');

    addButton.addEventListener('click', appendNewTask);

    inputContainer.appendChild(addButton);
}

function appendNewTask() {
    const taskInput = document.querySelector('.task-input');
    const dateInput = document.querySelector('.date-input');
    const tasksContainer = document.getElementById('tasks-container');

    if (taskInput && taskInput.value.trim() && dateInput && dateInput.value) {
        const taskItem = document.createElement('span');
        taskItem.classList.add('card', 'task-card', 'mb-2', 'p-2', 'd-flex', 'align-items-center', 'justify-content-center');

        const taskText = document.createElement('p');
        taskText.textContent = taskInput.value.trim();
        taskText.classList.add('mb-5');
        taskItem.appendChild(taskText);

        const taskDate = document.createElement('div');
        taskDate.textContent = `Due: ${dateInput.value}`;
        taskDate.classList.add('badge', 'bg-warning', 'text-dark', 'me-3');
        taskItem.appendChild(taskDate);

        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        completedButton.classList.add('btn', 'btn-success',);
        taskItem.appendChild(completedButton);

        completedButton.addEventListener('click', () => {
            taskItem.classList.add('completed');
        });

        tasksContainer.appendChild(taskItem);

        taskInput.value = '';
        dateInput.value = '';
        taskInput.parentElement.removeChild(taskInput);
        dateInput.parentElement.removeChild(dateInput);
        const addButton = document.getElementById('add-new-task-btn');
        addButton.parentElement.removeChild(addButton);
    } else {
        alert('Please enter a task!');
    }
}

// Clear All Completed Tasks
function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll('.completed');

    completedTasks.forEach((task) => {
        task.parentElement.removeChild(task);
    });
}