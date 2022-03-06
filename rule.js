document.getElementById("easy").addEventListener("click", function(){
    // alert("selected easy");
    var selector = Math.random() * 30
    // alert(selector);
    if (selector > 2) {
        window.open("easy.html", "_self");
    }
    else {
        window.open("game.html", "_self");
    }
})

document.getElementById("med").addEventListener("click", function() {
    // alert("selected medium");
    var selector = Math.random() * 30
    // alert(selector);
    if (selector > 15) {
        window.open("easy.html", "_self");
    }
    else {
        window.open("game.html", "_self");
    }
})

document.getElementById("hard").addEventListener("click", function() {
    // alert("selected hard");
    var selector = Math.random() * 100
    // alert(selector);
    if (selector <= 2) {
        window.open("easy.html", "_self");
    }
    else {
        window.open("game.html", "_self");
    }
})