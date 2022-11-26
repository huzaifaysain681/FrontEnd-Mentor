const menubtnEl = document.getElementById("menu-btn")
const menuEl = document.getElementById("menu-bar")
menubtnEl.addEventListener('click', () =>{
    menuEl.classList.toggle("active")
})