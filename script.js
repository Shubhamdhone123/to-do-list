document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addBtn = document.getElementById('add');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.remove();
        }
    });
});
