

    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById('taskList');

    //function add task():
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement('li');
        li.innerHTML = `
        <span>${taskText}</span>
        <button id="button1" class="button4" onclick="toggleTaskCompleted(this)">Done <i class="fa-solid fa-circle-check"></i></button>
        <button id="button2" class="button4" onclick="editTask(this)">Edit <i class="fa-solid fa-pen-to-square"></i></button>
        <button id="button3" class="button4" onclick="deleteTask(this)">Delete <i class="fa-solid fa-trash-can"></i></button>`;

        taskList.appendChild(li);
        taskInput.value = "";

    }

    //done
    function toggleTaskCompleted(button) {
        const task = button.parentElement;


        task.classList.toggle('completed');

    }

    //delete
    function deleteTask(button) {
        const task = button.parentElement;


        task.remove();

    }

    //Edit

    function editTask(button) {
        const task = button.parentElement;
        const span = task.querySelector('span');
        const newText = prompt('Edit The Task:', span.innerText);

        if (newText !== null) {
            span.innerText = newText;
        }




    }





