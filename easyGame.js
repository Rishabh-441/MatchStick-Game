var sticks = 21;
// alert("easy game started");
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
    if (num < sticks) {
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
        leftSticks.innerText = sticks;
        if (sticks == 1) {
            compLost();
            return;
        }
        let rem = Math.floor(Math.random() * 4 + 1)
        if (sticks <= 4) {
            var n = sticks - 1 
            rem = Math.floor(Math.random() * n + 1);
        }
        
        comp.innerText = rem;
        for (let i = sticks; i > sticks-(rem); i--) {
            setTimeout(() => {
                removeSticks(i);
            }, 1000);
        }
        sticks -= rem;
        leftSticks.innerText = sticks;
        if (sticks == 1) {
            changeLost();
        }
    }
}

function removeSticks(i) {
    let b = 's' + i;
    var element = document.getElementById(b);
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

function compLost() {
    setTimeout(() => {
        window.open("won.html", "_self")
    }, 2000);
}

