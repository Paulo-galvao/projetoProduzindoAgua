let menuIsOpened = false;
const menu = document.querySelector(".menu ul");
const btn = document.querySelector(".mobile-menu");


btn.addEventListener("click", () => {
    if(!menuIsOpened) {
        menu.style.display = "flex";
        menuIsOpened = true;
    } else {
        menu.style.display = "none";
        menuIsOpened = false;
    }
});