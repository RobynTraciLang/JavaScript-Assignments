let cardsDiv = document.querySelector("#coder-decks");
let currentUserName = "";

function getUserName(element) {
    console.log(element.value);
    currentUserName = element.value;
}

function makeCoderCard(data) {
    let res = `<div class="card">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <div>
                        <h3>${data.login} - ${data.name}</h3>
                        <p>Location: ${data.location}</p>
                        <p>Repositories: ${data.public_repos}</p>
                    </div>
                </div>`
    return res;
}

async function search() {
    let response = await fetch("https://api.github.com/users/" + currentUserName);
    let coderData = await response.json();
    console.log(coderData);
    makeCoderCard(coderData);
    cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;
}

function hideH3(event){
    event.preventDefault();
    let originalH3 = document.querySelector("#to-be-removed");
    originalH3.style.display = "none";
    console.log("I'm working!")
}

function clearInput(event){
    event.preventDefault();
    let inputValue = document.querySelector("#input-to-clear");
    inputValue.value = "";
}