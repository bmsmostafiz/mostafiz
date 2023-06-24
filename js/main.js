//--------- Script for nav Menue
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


//--------- Script for Read More button

const readMore = document.querySelector("#read-more");
const experience = document.querySelector("#experience");
const secondPara = document.querySelector("#second_para");

readMore.addEventListener("click", () => {
    experience.classList.toggle("show");
    secondPara.classList.toggle("show");
    if (readMore.innerHTML === "Read More") {
        readMore.innerHTML = "Read Less";
    } else {
        readMore.innerHTML = "Read More";
    }
})

//------------------- Testimonials area

var testimonials = document.getElementById('testimonials');
var control1 = document.getElementById('control1');
var control2 = document.getElementById('control2');
var control3 = document.getElementById('control3');


control1.onclick = function () {
    testimonials.style.transform = "translateX(870px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
}

control2.onclick = function () {
    testimonials.style.transform = "translateX(0px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
}

control3.onclick = function () {
    testimonials.style.transform = "translateX(-870px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
}