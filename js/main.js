


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const readMore = document.querySelector("#read-more");
const experience = document.querySelector("#experience");
const secondPara = document.querySelector("#second_para");

readMore.addEventListener("click", () =>{
    experience.classList.add("show");
    secondPara.classList.add("show");
    readMore.innerHTML = "Read Less";
})