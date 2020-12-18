const addForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');

// add new todo to the list
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    todoList.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${addForm.add.value.trim()}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;
    addForm.reset();
  }
});

// delete todo if click on trash icon
todoList.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// filter todo list by word
search.addEventListener('keyup', () => {
  const word = search.value.trim().toLowerCase();

  Array.from(todoList.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(word))
    .forEach(todo => todo.classList.add('filtered'));

  Array.from(todoList.children)
    .filter(todo => todo.textContent.toLowerCase().includes(word))
    .forEach(todo => todo.classList.remove('filtered'));
});
