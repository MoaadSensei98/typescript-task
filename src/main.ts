const TASKS = [
    {
        name: 'Mi primera tarea',
        done: false,
    },
    {
        name: 'Una tarea sin terminar',
        done: false,
    },
    {
        name: 'Una tarea terminada',
        done: true,
    },
    {
        name: 'Una tarea en modo edición',
        done: false,
    },
    {
        name: 'Una tarea para eliminar',
        done: false,
    },
    {
        name: 'Una tarea con un texto muy largo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid asperiores consequuntur dolorem excepturi fugiat harum ipsa iure laboriosam libero minima neque porro possimus quam, quasi qui saepe velit veritatis."',
        done: false,
    },
    {
        name: 'Tarea numero 7',
        done: false,
    },
    {
        name: 'Tarea numero 8',
        done: false,
    },
    {
        name: 'Tarea numero 9',
        done: false,
    },
    {
        name: 'Tarea numero 10',
        done: false,
    },
];

const taskListHTML = document.querySelector('#taskList');


function listTaskHTML(tasks) {

    taskListHTML.innerHTML = '';

    for (let task of tasks) {
        taskListHTML.innerHTML += `
    <li>
      <div>
        <input type="checkbox" ${task.done ? 'checked' : ''}>
        <span>${task.name}</span>
      </div>
      <span class="material-icons btn-delete">delete_outline</span>
    </li>
  `

    }

}

listTaskHTML(TASKS);

const taskLi:any = document.querySelectorAll('li');

const buttonDel:any = document.querySelectorAll(".btn-delete");
for (let button of buttonDel) {
    button.addEventListener('click', ()=>{

        let li = button.parentElement.firstElementChild.lastElementChild;
        for (let task of TASKS) {
            if (task.name == li.textContent){
                const index = TASKS.indexOf(task);
                TASKS.splice(index,1);
                console.log(TASKS);
            }
        }
        button.parentElement.remove();
     })


}
localStorage.setItem("TASKS",JSON.stringify(TASKS));
