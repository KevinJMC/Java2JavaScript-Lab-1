'use strict';

var display = document.getElementById("display");

function yourFunctionName() {
  display.innerHTML = "hello";
}

function oneToTen() {
    display.innerHTML = "";
    var i;
    for (i = 1; i <= 10; i++) {
        display.innerHTML += i + "<br />";
    }
}

function oddNumbers() {
    display.innerHTML = "";
    var i;
    for (i = 1; i < 20; i = i + 2) {
        display.innerHTML += i + "<br />";
    }
}

function squares() {
    display.innerHTML = "";
    var i;
    for (i = 1; i <= 10; i++) {
        display.innerHTML += (i * i) + "<br />";
    }
}

function random4() {
    display.innerHTML = "";
    var i;
    for (i = 1; i <= 4; i++) {
        display.innerHTML += Math.floor(Math.random() * 100) + "<br />";
    }
}

function even(n) {
    display.innerHTML = "";
    var i;
    for (i = 2; i < n; i = i + 2) {
        display.innerHTML += i + "<br />";
    }
}

function powers(n) {
    display.innerHTML = "";
    var i;
    for (i = 1; i <= n; i++) {
        display.innerHTML += Math.pow(2, i) + "<br />";
    }
}

function areWeThereYet() {
    display.innerHTML = "";
    var i, input;
    do {
        display.innerHTML += "Are we there yet?" + "<br />";
        input = prompt("Are we there yet?");
        display.innerHTML += input + "<br />";
    } while (input.toLowerCase() != "yes");
    display.innerHTML += "Good!";
}

function triangle(n) {
    display.innerHTML = "";
    var i, j;
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            display.innerHTML += "*";
        }
        display.innerHTML += "<br />";
    }
}

function tableSquare(n) {
    display.innerHTML = "";
    var i, j;
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n; j++) {
            display.innerHTML += i * j + " " + "&nbsp;";
        }
        display.innerHTML += "<br />";
    }
}