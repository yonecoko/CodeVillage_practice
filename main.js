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
    const taskList = taskArea.appendChild(document.createElement("p"));
    taskList.innerHTML = addText;

    const completeBtn = document.createElement("button");
    taskList.appendChild(completeBtn);
    completeBtn.textContent = "完了";

    completeBtn.addEventListener("click", function() {
        taskList.remove();
        completeBtn.remove();
    });
}};


