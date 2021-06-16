
const ClassNames = {
    task: 'task',
    taskHide: 'task_hide',
    taskActive: 'task_active',
    taskColumn: 'task-column',
    taskHeader: 'task-column__header',
    taskHeaderActive: 'task-column__header_active',
};

const Selector = {
    task: `.${ClassNames.task}`,
    taskHide: `.${ClassNames.taskHide}`,
    taskHeader: `.${ClassNames.taskHeader}`,
    taskHeaderActive: `.${ClassNames.taskHeaderActive}`,
};

let currentTaskElement = undefined;

function addEventListeners() {
    let allTasks = document.querySelectorAll(Selector.task);

    allTasks.forEach(task => {
        task.addEventListener('dragstart', onDragstart);
        task.addEventListener('dragend', onDragend);
    });

    let taskColumns = document.querySelectorAll('.task-column');

    taskColumns.forEach(column => {
        column.addEventListener('dragenter', onDragenter);
        column.addEventListener('dragleave', onDragleave);
        column.addEventListener('dragover', onDragover);
        column.addEventListener('drop', onDrop);
    });
}

function onDragstart(event) {
    event.target.classList.add(ClassNames.taskActive);

    setTimeout(() => {
        event.target.classList.add(ClassNames.taskHide);
    }, 0);

    currentTaskElement = event.target;
}

function onDragend(event) {
    event.target.classList.remove(ClassNames.taskActive, ClassNames.taskHide);
    currentTaskElement = undefined;
}

function onDragenter(event) {
    event.target.parentElement.querySelector(Selector.taskHeader).classList.add(ClassNames.taskHeaderActive);
}

function onDragleave(event) {
    event.target.parentElement.querySelector(Selector.taskHeader).classList.remove(ClassNames.taskHeaderActive);
}

function onDragover(event) {
    event.preventDefault();
}

function onDrop(event) {
    if (currentTaskElement !== undefined) {
        event.target.append(currentTaskElement);
        currentTaskElement = undefined;
    }
}

addEventListeners();