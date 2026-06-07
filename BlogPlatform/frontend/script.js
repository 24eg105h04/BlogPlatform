function addComment(){

    let comment = document.getElementById("commentInput").value;

    let li = document.createElement("li");

    li.textContent = comment;

    document.getElementById("comments").appendChild(li);

    document.getElementById("commentInput").value = "";

}