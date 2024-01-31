
document.addEventListener('DOMContentLoaded', ()=>{
    var toggler = document.querySelector(".navbar__toggler");
    var list = document.querySelector(".navbar__list")
    toggler.addEventListener("click", ()=>{
           
            list.classList.toggle("navbar-invisible");
    })
})