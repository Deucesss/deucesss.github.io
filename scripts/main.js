let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sight.jpg') {
        myImage.setAttribute('src', 'images/sight2.jpg');
    } else {
        myImage.setAttribute('src', 'images/sight.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt("Please Enter Your Name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = 'Hello ' + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}