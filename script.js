const title=document.getElementById("title");
const description=document.getElementById("description");

const form=document.querySelector("form");
const container=document.querySelector(".container");

const task=localStorage.getItem("task")?
JSON.parse(localStorage.getItem("task")):[];
showAllTasks();

function removeTasks(){
    task.forEach(()=>{
        const tsk=document.querySelector(".task")
        tsk.remove();
    })
}



function showAllTasks(){
    task.forEach ((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");
        
        const innerdiv=document.createElement("div")
        div.append(innerdiv);

        const p=document.createElement("p")
        p.innerText=value.title;
        innerdiv.append(p);

        const span=document.createElement("span")
        span.innerText=value.description;
        innerdiv.append(span);

        const btn=document.createElement("button")
        btn.setAttribute("class","deletebtn")
        btn.innerText="-";

        div.append(btn);

        btn.addEventListener("click",()=>{
            removeTasks();
            task.splice(index,1);
            localStorage.setItem("task",JSON.stringify(task));
            showAllTasks();
        })

        container.append(div)


    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTasks();
    task.push({
        title:title.value ,
        description:description.value ,
    });
    localStorage.setItem("task",JSON.stringify(task));
    showAllTasks();
})