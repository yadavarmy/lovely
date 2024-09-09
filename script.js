function moverandomEL(elm){
    elm.style.position = "absolute";
    elm.style.top = Math.floor(math.random()*90 + 5) +"%";
    elm.style.left = math.floor(math.random() * 90 + 5) + "%";
}

const moverandom = document.querySelector("#move-random");

moverandom.addEventListener("mouseenter", function(e) {
    moverandomEL(e.target);
});