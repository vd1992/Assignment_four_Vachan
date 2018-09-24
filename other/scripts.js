// Hamburger menu functionality with toggle//
function menu(){
    if (document.getElementById("menu").style.display=="flex"){
        document.getElementById("menu").style.display="none";
        return;
    }
    else{
        document.getElementById("menu").style.display="flex";
    }
}


