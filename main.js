const text = document.querySelector(".textContent");
// const button = document.getElementsByClassName("button");

const addBtn = function() {
    addText = text.value;
    console.log(addText);

    const taskArea = document.getElementById("taskArea");
    // const addTask = document.createElement("p");
    const taskList = taskArea.appendChild(document.createElement("p"));
    taskList.innerHTML = addText;
    // console.log(taskList);

    const completeBtn = document.createElement("input");
    completeBtn.type = "button";
    console.log(completeBtn);

}


