let tasks=[];
let currentFilter="all";

function addTask(){
    let input=document.getElementById("taskInput");
    if(input.value=="") return;

    tasks.push({
        text:input.value,
        done:false
    });

    input.value="";
    render();
}

function render(){
    let list=document.getElementById("list");
    list.innerHTML="";

    tasks.forEach((task,index)=>{

        if(currentFilter=="active" && task.done) return;
        if(currentFilter=="done" && !task.done) return;

        list.innerHTML+=`
        <li class="${task.done ? "done":""}">
        <span onclick="toggleTask(${index})">${task.text}</span>
        <button onclick="deleteTask(${index})">Delete</button>
        </li>`;
    });
}

function toggleTask(index){
    tasks[index].done=!tasks[index].done;
    render();
}

function deleteTask(index){
    tasks.splice(index,1);
    render();
}

function filterTasks(type){
    currentFilter=type;
    render();
}
