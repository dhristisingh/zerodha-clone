const menuElement = document.querySelector(".menu");
const menuOptionsElement = document.querySelector('.menu-options');
const menuIconElement = document.querySelector('.menu-icon');
const crossIconElement = document.querySelector('.cross-icon');

let isShowing = false;
menuElement.addEventListener("click", () => {
    menuOptionsElement.classList.toggle('flex');
    if( !isShowing ){
        menuIconElement.style.display = "none";
        crossIconElement.style.display = "flex";
        crossIconElement.style.opacity = "1";
        isShowing = true
    }else {
        menuIconElement.style.display = "flex";
        crossIconElement.style.display = "none";
        crossIconElement.style.opacity = "0";
        isShowing = false;
    }
});