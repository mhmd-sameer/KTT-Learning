let elem = document.getElementById("elem");

while(true){

    let text = prompt("Enter the content of list");

    if(text===null || text.trim()==''){
        break;
    }
    
    let list = document.createElement('li');
    list.textContent = text;
    elem.append(list);
}



