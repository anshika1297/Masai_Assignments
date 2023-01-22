document.querySelector("form").addEventListener("submit",todoList)
var todo=JSON.parse(localStorage.getItem("task"))||[];
displaytask();
function todoList()
{
    event.preventDefault();
var task= document.getElementById("task").value;
var priority= document.getElementById("priority").value; 
var objct={task:task,priority:priority};
todo.push(objct);
localStorage.setItem("task", JSON.stringify(todo));
document.querySelector("tbody").textContent="";
displaytask();
}

function displaytask()
{
    todo.map(function(elem, index)
    {
        var tr= document.createElement("tr");
        var td1=document.createElement("td");
        td1.textContent=elem.task;

        var td2=document.createElement("td");
        td2.textContent=elem.priority;

        if(elem.priority==="High")
        {
            td2.setAttribute("id","high");
        }
        else{
            td2.setAttribute("id","low");
        }

        var td3=document.createElement("td");
        td3.textContent="Delete";
        td3.addEventListener("click",function (){
            deletetask(index);
        });

        tr.append(td1,td2,td3);
        document.querySelector("tbody").append(tr);
    }) ;
}

    function deletetask(index){
        var removet=todo.splice(index,1);
        localStorage.setItem("task", JSON.stringify(todo));
        document.querySelector("tbody").textContent="";
        displaytask();
    }




