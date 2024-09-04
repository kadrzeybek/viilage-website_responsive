

const menuBar = document.querySelector('#menu-btn');


/* buttons */

const menuLink = document.querySelector('.navbar ');
const menuLinks = document.querySelector('.navbar .link ');

menuBar.addEventListener("click", function () {
    menuLink.classList.toggle("active");
    
    document.addEventListener("click", function(e){
        if(!e.composedPath().includes(menuBar) && !e.composedPath().includes(menuLink)){
            menuLink.classList.remove("active");
        }
    })
});