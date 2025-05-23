function changetogreen(id, bclass) {
    var elemento = document.getElementById(id);
    elemento.style.color = "#00ff00";

    var botones = document.getElementsByClassName(bclass);
    //botones ===> [b0, b1]

    for(var pos = 0; pos < botones.length; pos++) {
        botones[pos].style.display = "none";
    } 
}
function changetored(id, bclass) {
    var elemento = document.getElementById(id);
    elemento.style.color = "#ff0000";

    var botones = document.getElementsByClassName(bclass);
    //botones ===> [b0, b1]

    for(var pos =0; pos <botones.length; pos++) {
        botones[pos].style.display = "none";
    }
}