//Récupération du formulaire
const formAddTask = document.querySelector('#formAddTask');

const URL_ACTIONS = 'actions.php';
const tableTasks = document.querySelector('.table');

formAddTask.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch(URL_ACTIONS, {
        method: 'POST',
        body: formData
    })
        .then(data => data.json())
        .then(json => {
            if (json.code !== 'ADD_TASK_OK' ) return;

            const row = tableTasks.insertRow();
            const firstCell = row.insertCell();
            const secondCell = row.insertCell();

            firstCell.classList.add('text-center');

            const checkbox = document.createElement('input');
            const taskName = document.createTextNode(json.taskName);

            checkbox.type = 'checkbox';
            checkbox.classList.add('form-check-input');
            checkbox.dataset.id = json.taskId;

            firstCell.appendChild(checkbox);
            secondCell.appendChild(taskName);

            
        })
})