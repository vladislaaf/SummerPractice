var r, g, b;
function ran(){
    r = Math.floor(Math.random() * (200 - 50) + 50);
    g = Math.floor(Math.random() * (200 - 50) + 50);
    b = Math.floor(Math.random() * (200 - 50) + 50);
}
var cvet = document.getElementById("asd");
ran();
cvet.style.color = "rgb("+r+","+g+","+b+")";
cvet = document.getElementById("as");
ran();
cvet.style.color = "rgb("+r+","+g+","+b+")";
cvet = document.getElementById("a");
ran();
cvet.style.color = "rgb("+r+","+g+","+b+")";
