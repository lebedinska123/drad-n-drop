
function addEventListeners() {
    let allTasks = document.querySelectorAll('.task');

    allTasks.forEach(task => {
        task.addEventListener('dragstart', () => console.log('adfdsf'));
        task.addEventListener('dragend', onDragend);
    });

    let taskColumns = document.querySelectorAll('.task-column');

    taskColumns.forEach(column => {
        column.addEventListener('dragover', onDragover);
        column.addEventListener('dragenter', onDragenter);
        column.addEventListener('dragleave', onDragleave);
        column.addEventListener('drag', onDrag);
    });
}

function onDragend(event) {
    
}

function onDragstart(event) {
    
}

function onDragover(event) {
}

function onDragenter(event) {
    event.target.parentElement.querySelector('.task-column__header').classList.add('task-column__header_active');
}

function onDragleave(event) {
    event.target.parentElement.querySelector('.task-column__header').classList.remove('task-column__header_active');    
}

function onDrag(event) {
    
}

addEventListeners();