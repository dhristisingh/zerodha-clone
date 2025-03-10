const menuElement = document.querySelector(".menu");
const menuOptionsElement = document.querySelector('.menu-options');
console.log(menuElement);

menuElement.addEventListener("click", () => {
    console.log('hello');
    menuOptionsElement.classList.toggle('flex');
});