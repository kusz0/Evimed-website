// nav
const bar = document.querySelector("nav i");
const menu = document.querySelector("nav ul");
const icon = document.querySelector("nav i");
const burgerFnc = (e) => {
    menu.classList.toggle("active");
    
    if(menu.classList.contains("active")){
        icon.className = "fa-solid fa-x";
    }else{
        icon.className = "fa-solid fa-bars";
    }
}
bar.addEventListener("click", burgerFnc);

