var wrapper = document.getElementById("wrapper");
wrapper.onclick = function(event) {
  var target = event.target; 
  var listItem = target.parentNode;
  if (target.tagName == 'SPAN') {
    
    var ul = listItem.parentNode;
    ul.removeChild(listItem);  
  } 

  if (target.className == "edit") {
    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");  
    var containsClass = listItem.classList.contains("editing");

    if(containsClass) {
      editInput.value = label.innerText;
      label.innerText = "";
      editInput.focus();
      target.innerText = "Сохранить";
    } else {
      label.innerText = editInput.value;
      target.innerText = "Изменить";
      editInput.value = "";
    }

     listItem.classList.toggle("editing");
  }

  if (target.className == "checkbox") {   
    if (target.checked) {
      var doneList = document.getElementById("done");
      var listItem = target.parentNode;
      doneList.appendChild(listItem);
    }
    else {
      var undoneList = document.getElementById("ul");
      var listItem = target.parentNode;
      undoneList.appendChild(listItem);
    }      
  }
}



//Новая задача
function createNewTaskElement() {
  var value =  document.getElementById("input").value;

  if (value == "") {
    return alert("Empty value");
  }
  
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");   
  var editInput = document.createElement("input"); 
  var label = document.createElement("label");
  var closeButton = document.createElement("span");
  var editButton = document.createElement("button");

  label.innerText = document.getElementById("input").value;
  closeButton.innerText = "Удалить";
  editButton.innerText = "Изменить";
 
  listItem.className = "editing"; 
  checkBox.className = "checkbox";
  closeButton.className = "close";
  editButton.className = "edit";

  checkBox.type = "checkbox";
  editInput.type = "text";  
  editInput.type = "text";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(closeButton);
  listItem.appendChild(editButton);
  document.getElementById("ul").appendChild(listItem);
  document.getElementById("input").value = "";
  return listItem;
}


  