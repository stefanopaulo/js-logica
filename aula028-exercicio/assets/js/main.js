const inputTask = document.querySelector('.input-new-task');
const btnTask = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createDeleteButton(li) {
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Apagar';
    deleteButton.setAttribute('class', 'delete');
    deleteButton.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(deleteButton);
}

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    clearInput();
    createDeleteButton(li);
    saveTasks();
}

btnTask.addEventListener('click', function() {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('delete')) {
        el.parentElement.remove();
        saveTasks();
    }
});

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const taskList = [];

    for (let task of liTasks) {
        let textTask = task.innerText;
        textTask = textTask.replace('Apagar', '').trim();
        taskList.push(textTask);
    }

    const taskJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', taskJSON);
}

function uploadTasks() {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);

    for (let task of taskList) {
        createTask(task);
    }
}

uploadTasks();
