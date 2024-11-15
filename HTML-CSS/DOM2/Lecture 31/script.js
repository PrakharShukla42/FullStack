document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById('add-btn');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const taskText = inputField.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => todoList.removeChild(listItem);

            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);

            listItem.scrollIntoView({ behavior: 'smooth' });

            inputField.value = '';
        }
    });

    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});
