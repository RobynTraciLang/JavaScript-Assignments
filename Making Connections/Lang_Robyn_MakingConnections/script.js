function changeColor(element) {
    element.style.backgroundColor = "rgb(196, 6, 196)";
}

function changeBack(element) {
    element.style.backgroundColor = "fuchsia";
}

console.log("I'm working")

function activateDarkMode(element) {
    element.style.backgroundColor = "#211111";
    element.style.color = "#ffffff";
}//code I tried from the Learn Platform...it works!

function changeUserName() {
    let h1Tag = document.querySelector("h1");
    // let profileImage = document.querySelector("#Robyn");

    h1Tag.innerText = "Jane Doe";
    // profileImage.src = ""
}

function removeThisRequest1() {
    let requestedConnection1 = document.querySelector(".requested-connections1");
    let numberOfRequests = document.querySelector("#number-of-requests");
    requestedConnection1.remove();
    numberOfRequests.innerText = Number(numberOfRequests.innerText) - 1;
}

function acceptRequest() {
    let userConnections = document.querySelector("#number-of-connections")
    userConnections.innerText = Number(userConnections.innerText) + 1;
}

function removeThisRequest2() {
    let requestedConnection2 = document.querySelector(".requested-connections2");
    let numberOfRequests = document.querySelector("#number-of-requests");
    requestedConnection2.remove();
    numberOfRequests.innerText = Number(numberOfRequests.innerText) - 1;
}