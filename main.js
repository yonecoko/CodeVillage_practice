const text = document.querySelector(".textContent");

const addBtn = function() {
    addText = text.value;
    console.log(addText);

    const taskArea = document.getElementById("taskArea");
    const taskList = taskArea.appendChild(document.createElement("p"));
    taskList.innerHTML = addText;

    const completeBtn = document.createElement("button");
    taskList.appendChild(completeBtn);
    completeBtn.textContent = "完了";

    completeBtn.addEventListener("click", function() {
        taskList.remove();
        completeBtn.remove();
    });
}


