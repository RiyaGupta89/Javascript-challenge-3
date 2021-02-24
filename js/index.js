
const btnYellow = document.getElementById("btnYellow");
const btnBlack = document.getElementById("btnBlack");
const icon = document.getElementById("icon");

btnYellow.addEventListener('click', colorYellow);

function colorYellow() {
    icon.style.color = "yellow";
}

btnBlack.addEventListener('click', colorBlack);

function colorBlack() {
    icon.style.color = "black";
}