/*
var sum = function (a, b) {
    return a + b;
}

alert(sum(100, 200));
window.alert(sum(10, 20));
*/


function greet() {
    const name = document.getElementById("userName").value
    console.log("name = " + name);
}

function greetUser() {
    const name = document.getElementById("userName").value
    document.getElementById("resultUser").textContent = name + "，你好ㄛ";
}

function getUserName() {
    const name = document.getElementById("userName").value
    showMessage(name);
}

function showMessage() {
    document.getElementById("resultUser").textContent = name + "，你好ㄛ";
}