document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');

    addButton.addEventListener('click', function () {
      const taskText = todoInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        todoInput.value = '';
      }
    });

    function addTask(taskText) {
      const listItem = document.createElement('li');
      listItem.className = 'todo-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      const taskLabel = document.createElement('label');
      taskLabel.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        listItem.remove();
      });

      todoList.appendChild(listItem);
      listItem.appendChild(checkbox);
      listItem.appendChild(taskLabel);
      listItem.appendChild(deleteButton);

    }
  });