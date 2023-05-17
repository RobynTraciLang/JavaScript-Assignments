function increaseLikes(){
    let numberOfLikes = document.querySelector(".number-of-likes span");
    numberOfLikes.innerText = Number(numberOfLikes.innerText) + 1;
}