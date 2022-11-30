console.log("connect");
const playground = document.querySelector("#playground");
// strict equivaleng de 
// const playground = document.getElementById("playground");
const pacman = document.querySelector("#pacman");
console.dir(pacman);
let posX = 0;
let posY = 0;
window.addEventListener("keyup",function(event){
    console.dir(event);
    console.log(posX);
    console.log(posY);
    //event.keyCode
    //z=90
    //q=81
    //s=83
    //d=68
    switch (event.keyCode) {
        case 90:
            console.log("haut");
            if( posY > 0) {
                posY = posY - 100;
                pacman.style.top=posY+"px";
            }

            break;
        case 83:
            console.log("bas");
            if( posY < 300) {
                posY = posY + 100;
                pacman.style.top=posY+"px";
            }

            break;
        case 81:
            console.log("gauche");
            if( posX > 0 ) {
                posX = posX - 100;
                pacman.style.left=posX+"px";
            }
            
            break;
        case 68:
            
            console.log("droite");
            if( posX < 500) {
                posX = posX + 100;
                pacman.style.left=posX+"px";
            }
            // pacman.style.transform = "translateX(100px)";
            console.dir(pacman);
            break;
        
        default:
            //alert("Tu t'es planté c******");
            break;
    }
})

