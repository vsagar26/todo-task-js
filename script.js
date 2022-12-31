document.querySelector("#add-btn").onclick = function () {
  if (document.querySelector(".new-task input").value.length == 0) {
    alert("Add some task");
  } else {
    document.querySelector(
      "#added-task"
    ).innerHTML += `<div className="new-task">
        <span id="task-name">
        ● ${document.querySelector(".new-task input").value}
        </span>
        <button class="delete">
        <i class="far fa-trash-alt" ></i>
        </button>
    </div>`;

    var deleteTask = document.querySelectorAll(".delete");
    for (var i = 0; i < deleteTask.length; i++) {
      deleteTask[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
