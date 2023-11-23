const text = document.querySelector(".textContent");

const addBtn = function() {
    const inputValue = text.value.trim();

    if (inputValue === "") {
    alert("テキストを入力してください。");
    } else {
    addText = text.value;
    text.value = "";
    console.log(addText);

    const taskArea = document.getElementById("taskArea");
    const taskWrap = document.createElement("div");
    taskWrap.classList = "taskWrap";
    taskArea.appendChild(taskWrap);
    
    const taskList = taskWrap.appendChild(document.createElement("p"));
    taskList.innerHTML = addText;
    taskList.className = "taskList";

    const completeBtn = document.createElement("button");
    taskWrap.appendChild(completeBtn);
    completeBtn.textContent = "完了";
    completeBtn.className = "completeBtn";

    completeBtn.addEventListener("click", function() {
        taskWrap.remove();
        taskList.remove();
        completeBtn.remove();
    });
}};


