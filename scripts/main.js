var smallScreen = window.matchMedia("(max-width:1000px)");
smallScreen.addListener(screenSizeAdjust);
                             
function screenSizeAdjust(){
    let navToggler = document.getElementById("navbar-toggler");
    let navBar = document.getElementById("navbar");
    if(!smallScreen.matches){
        navBar.style.display="block";
        navToggler.className="show";
    }
    else{
         navBar.style.display="none";
        navToggler.className = "";
    }
}

function areaExpand(e){
    if(smallScreen.matches){
        let navToggler = document.getElementById("navbar-toggler");
        let navBar = document.getElementById("navbar");
        if(navToggler.className!="show"){
            navBar.style.display="block";
            navToggler.className+="show";
        }
        else{
            navBar.style.display="none";
            navToggler.className = "";
        }
    }
    else{}
}