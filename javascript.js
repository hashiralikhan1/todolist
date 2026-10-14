const todoList =[{name: 'kamran', dueDate: '2026-10-14'} ,
   {
      name: 'baigh',
      dueDate: '2026-10-14'
   }
];
renderTodList();

function renderTodList() {
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
     const name= todoObject.name;
     const dueDate = todoObject.dueDate; 
    const html = `<p>${name} ${dueDate}
        <button
            onclick="
                todoList.splice(${i}, 1);
                renderTodList();
            "
        >Delete</button>
    </p>`;

    todoListHTML += html;
}

console.log(todoListHTML);
document.querySelector('.js-todo-list').innerHTML = todoListHTML

}


function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   
   const name = inputElement.value;

   todoList.push(name);
  
   inputElement.value= '';
   renderTodList();
}