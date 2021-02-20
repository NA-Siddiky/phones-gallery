const circle = document.getElementById("circle")
const upBtn = document.getElementById("upBtn")
const downBtn = document.getElementById("downBtn")

let rotateValue = circle.style.transform;
let rotateSum;

upBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}


// function changingFeatures(){
//     rotateSum = rotateValue + "rotate(-90deg)";
//     circle.style.transform = rotateSum;
//     rotateValue = rotateSum;
// }  

// const changingFeatures = upDown =>{
//     rotateSum = rotateValue + "rotate(-90deg)";
//     circle.style.transform = rotateSum;
//     rotateValue = rotateSum;
// }
