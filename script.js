function addTask(){

    let taskInput = document.getElementById("taskInput");
    let taskTime = document.getElementById("taskTime");

    if(taskInput.value.trim() === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <div class="task-left">
            <input type="checkbox" class="check">
            <span>${taskInput.value}</span>
        </div>

        <div class="buttons">
            <button class="eta">${taskTime.value || "Add ETA"}</button>
            <button class="edit">Edit</button>
            <button class="delete">X</button>
        </div>
    `;

    let checkBox = li.querySelector(".check");
    let taskText = li.querySelector("span");

    checkBox.addEventListener("change",()=>{
        taskText.classList.toggle("completed");
    });

    li.querySelector(".edit").addEventListener("click",()=>{
        let newText = prompt("Edit Task", taskText.textContent);
        if(newText){
            taskText.textContent = newText;
        }
    });

    li.querySelector(".delete").addEventListener("click",()=>{
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);

    taskInput.value="";
    taskTime.value="";
}