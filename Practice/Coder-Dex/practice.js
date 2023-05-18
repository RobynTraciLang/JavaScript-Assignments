let currentUserName = "";

function getUserName(element){
    console.log(element.value);
    currentUserName = element.value;
}

function makeCoderCard(data){
    let res = 
}

async function search(){
    let response = await fetch("https://api.github.com/users/" + currentUserName);
    let coderData = await response.json();
    console.log(coderData);
}