var sticks = 21;
// alert("hard game started");
var leftSticks = document.querySelector(".left-sticks");
var lost = document.getElementById("lost");
var b1 = document.querySelector(".selector1");
var b2 = document.querySelector(".selector2");
var b3 = document.querySelector(".selector3");
var b4 = document.querySelector(".selector4");

b1.addEventListener("click", function() {
    set(b1.innerText);
});
b2.addEventListener("click", function() {
    set(b2.innerText);
});
b3.addEventListener("click", function() {
    set(b3.innerText);
});
b4.addEventListener("click", function() {
    set(b4.innerText);
});

function set(num) {
    if (sticks == 1) {
        changeLost();
    }
    var comp = document.querySelector(".comp-removed");
    for (let i = sticks; i > sticks-num; i--) {
        setTimeout(() => {
            removeSticks(i);
        }, 1000);
    }
    sticks -= num;
    
    comp.innerText = 5-num;
    for (let i = sticks; i > sticks-(5-num); i--) {
        setTimeout(() => {
            removeSticks(i);
        }, 1000);
    }
    sticks -= 5-num;
    leftSticks.innerText = sticks;
    if (sticks == 1) {
        changeLost();
    }
}

function removeSticks(i) {
    let b = 's' + i;
    var element = document.getElementById(b);
    // console.log(element);
    element.style.opacity = "0";
    var bar = document.getElementById("bar");
    var wid = (sticks/21) * 100;
    bar.style.width = wid + "%";
}

function changeLost() {
    setTimeout(() => {
        window.open("lost.html", "_self");
    }, 2000);
}

