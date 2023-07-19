const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskItem(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input class="check" type="checkbox">
        <span class="text">${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
}

// Event listener for the "Add" button
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        createTaskItem(taskText);
    }
});

// Event listener for the "Enter" key
taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            createTaskItem(taskText);
        }
    }
});

// Event delegation for the "Delete" button
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteBtn')) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }
});
const content = document.querySelector('#content');
content.style.transformOrigin = 'top left';

window.addEventListener('resize', recalculateScale);

function recalculateScale() {
  const windowHeight = window.innerHeight;
  content.style.transform = `scale(${windowHeight / content.offsetHeight})`;
}

recalculateScale();