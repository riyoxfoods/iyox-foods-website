document.getElementById("year").textContent = new Date().getFullYear();
const menu=document.querySelector(".menu");
const nav=document.querySelector(".navlinks");
menu?.addEventListener("click",()=>{nav.classList.toggle("mobile-open")});
