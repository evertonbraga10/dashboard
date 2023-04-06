let troca = document.querySelector(".troca");
let body = document.querySelector("body");
let header = document.querySelector("header");
troca.addEventListener("click", ()=>{
    troca.classList.toggle("active");
    body.classList.toggle("dark");
    header.classList.toggle("active");
});