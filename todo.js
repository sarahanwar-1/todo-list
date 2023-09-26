const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); //to create the cross icon named in span tag
        span.innerHTML = "\u00d7"; // the cross icon
        li.appendChild(span); //to display the cross icon
    }
    inputBox.value = "";
    saveData();
    
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();// to call the function and save it to the browser
        
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //set the data to localstorage in listContainer
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");// display the data that is setted
}
showTask();// call the function