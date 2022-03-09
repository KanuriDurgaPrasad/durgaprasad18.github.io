const logoRotation = document.querySelector(".logo__img");
logoRotation.addEventListener("click",addRotation);
function addRotation(){
    logoRotation.classList.toggle("logo__rotation");
}


const lineOne = document.querySelector(".line__one");
const homeButton = document.querySelector(".home__btn");
homeButton.addEventListener("click",colorChange)
function colorChange(){
    lineOne.classList.toggle("color__change");
}
