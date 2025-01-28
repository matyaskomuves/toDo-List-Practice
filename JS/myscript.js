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

    if (inputContainer.querySelector('.task-input')) {
        inputContainer.querySelector('.task-input').focus();
        return;
    }

    const taskInput = document.createElement('input');

    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('placeholder', 'Enter a new task...');
    taskInput.setAttribute('required', '');
    taskInput.classList.add('task-input', 'form-control', 'w-50');

    inputContainer.appendChild(taskInput);


    const addButton = document.createElement('button');
    addButton.innerHTML = '<i class="fa-solid fa-plus"></i>';
    addButton.classList.add('btn', 'btn-primary', 'add-task-button');

    inputContainer.appendChild(addButton);
}