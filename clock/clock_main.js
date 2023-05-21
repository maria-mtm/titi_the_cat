const menuNav = document.querySelector('#nav')
const openMenu = document.querySelector('#toOpenBtn')
const closeMenu = document.querySelector('#toCloseBtn')

openMenu.addEventListener("click", () =>{
    menuNav.classList.add("visible");
})

closeMenu.addEventListener("click", () =>{
    menuNav.classList.remove("visible");
})

