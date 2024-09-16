let tasks = [];

const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    let taskObject = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        status: document.getElementById("status").value,
        priority: document.getElementById("priority").value
    };

    tasks.push(taskObject);

    updateTaskList();
});

function updateTaskList() {
    document.getElementById("todoList").innerHTML = "";
    document.getElementById("inProcessList").innerHTML = "";
    document.getElementById("doneList").innerHTML = "";

    tasks.forEach(task => {
        let listItem = `<li>${task.title} - ${task.description} (${task.priority})</li>`;
        
        if (task.status === "todo") {
            document.getElementById("todoList").innerHTML += listItem;
        } else if (task.status === "inProcess") {
            document.getElementById("inProcessList").innerHTML += listItem;
        } else if (task.status === "done") {
            document.getElementById("doneList").innerHTML += listItem;
        }
    });
}
