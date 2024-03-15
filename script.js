var inputElement1 = document.getElementById("input1");
var inputElement2 = document.getElementById("input2");
var inputElement3 = document.getElementById("input3");//this var is to store the inputbox

let invalid = false;
var button = document.getElementById("button");

var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");//this var is to store the small tag 

inputElement1.addEventListener("input", error1);
inputElement2.addEventListener("input", error2);
inputElement3.addEventListener("input", error3);//this is an event list

function error1() {
    var d1 = parseInt(inputElement1.value);
    if (d1 > 31 || d1 <= 0) {
        s1.innerText = "Invalid number";
        invalid = false;
        button.onclick = "-"

    } else {
        s1.innerText = "";
        invalid = true;
    }
}

function error2() {
    var m1 = parseInt(inputElement2.value);
    if (m1 > 12 || m1 <= 0) {
        s2.innerText = "Invalid number";
        invalid = false;
        button.onclick = "-"
        return;
    } else {
        s2.innerText = "";
        invalid = true;
    }
}
function error3() {
    var y1 = parseInt(inputElement3.value);
    if (y1 > 2024 || y1 <= 0) {
        s3.innerText = "Invalid number";
        invalid = false;
        button.onclick = "-"
        return;
    } else {
        s3.innerText = "";
        invalid = true;
    }
}

function output(){
    var d1 = inputElement1.value;
    var m1 = inputElement2.value;
    var y1 = inputElement3.value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var monthDays = [31,29,31,30,31,30,31,31,30,31,30,31];
    if (d1 > d2) {
        m2 = m2 - 1;
        d2 = d2 + monthDays[m2];
    }

    if (m1 > m2) {
        y2 = y2 - 1;
        m2 = m2 + 12;
    }
    var spand = document.getElementById("spand");
    var spanm = document.getElementById("spanm");
    var spany = document.getElementById("spany");

    spand.innerText = d2 - d1;
    spanm.innerText = m2 - m1;
    spany.innerText = y2 - y1;
    
    inputElement1.value = "";
    inputElement2.value = "";
    inputElement3.value = "";
}



