const name = document.getElementsByClassName("name")[0];
const text = "Hi, I'm Angkush...";
let iter = 0;

setTimeout(function() {
    const timeInverval = setInterval(function() {
        name.textContent += text[iter ++];
    }, 111);
    setTimeout(function() {
        clearInterval(timeInverval);
    }, 2000);
    setTimeout(function() {
        name.style.borderRight = "none";
    }, 3000);
}, 2000);
