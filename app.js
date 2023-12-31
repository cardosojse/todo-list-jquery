// $(document).ready(function(){
//     $(".submit").click(function(){
//         var input = $(".new-task").val();
//         if (input == ''){
//             alert("Empty field!");
//         }else{
//             $("ul").append("<li>" 
//                 + "<img class='check' width='25' height='25' src='https://img.icons8.com/material-outlined/24/checkmark.png'/>"
//                 + "<p class='item'>" + input + "</p>"
//                 + "<img class='remove' width='25' height='25' src='https://img.icons8.com/color/48/delete-sign--v1.png'/>"
//                 + "</li>");
//         }
//         $(".new-task").val('');
//     });''    
//     $("ul").on("click", ".check", function(){
//         $(this).parent("li").toggleClass("check");
//     });
//     $("ul").on("click", ".remove", function(){
//         $(this).parent("li").fadeOut(200);
//     });
// });
const taskInput = document.querySelector(".input__box");
const taskBox = document.querySelector(".task__box");

let todo = JSON.parse(localStorage.getItem("todo-list"));

let showTodo = () => {
    let li = "";
    if(todo){
        todo.forEach((todo, id) => {
            let taskCompleted = todo.status == "completed" ? "checked" : "";
            li += `
                <li class="list__box">
                    <label for="${id}">
                        <input onclick="update(this)" type="checkbox" id="${id}" ${taskCompleted}>
                        <p class="${taskCompleted}">${todo.name}</p>
                    </label>
                    <div class="settings">
                        <img width="18" height="18" src="https://img.icons8.com/ios-glyphs/30/ellipsis.png" alt="ellipsis"/>
                        <ul class="task__menu">
                            <li><img src="img/edit.png" alt="edit">Edit</li>
                            <li><img src="img/delete.png" alt="delete">Delete</li>
                        </ul>
                    </div>
                </li>
            `
        });
    }
    taskBox.innerHTML = li;
}
showTodo();

let update = (task) =>{
    let taskName = task.parentElement.lastElementChild;
    if(task.checked){
        taskName.classList.add("checked");
        todo[task.id].status = "complete";
    }else{
        taskName.classList.remove("checked");
        todo[task.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todo));
}

taskInput.addEventListener("keyup", (e) => {
    let  userTask = taskInput.value.trim();
    if (e.key == "Enter" && userTask){
        if(!todo)
            todo = [];
        taskInput.value = "";
        let taskInfo = {name: userTask, status: "pending"}
        todo.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todo))
        showTodo();
    }  
});