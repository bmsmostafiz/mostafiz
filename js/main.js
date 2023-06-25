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

// var testmonial = document.getElementById('testmonial');
// var control1 = document.getElementById('control1');
// var control2 = document.getElementById('control2');
// var control3 = document.getElementById('control3');
// var control4 = document.getElementById('control4');


// control1.onclick = function () {
//     testmonial.style.transform = "translateX(0px)";
//     control1.classList.add("active");
//     control2.classList.remove("active");
//     control3.classList.remove("active");
//     control4.classList.remove("active");
// }

// control2.onclick = function () {
//     testmonial.style.transform = "translateX(-900px)";
//     control1.classList.remove("active");
//     control2.classList.add("active");
//     control3.classList.remove("active");
//     control4.classList.remove("active");
// }

// control3.onclick = function () {
//     testmonial.style.transform = "translateX(-1800px)";
//     control1.classList.remove("active");
//     control2.classList.remove("active");
//     control3.classList.add("active");
//     control4.classList.remove("active");
// }

// control4.onclick = function () {
//     testmonial.style.transform = "translateX(-2700px)";
//     control1.classList.remove("active");
//     control2.classList.remove("active");
//     control3.classList.remove("active");
//     control4.classList.add("active");
// }

const testmonial = document.querySelector("#testmonial");
const control1 = document.querySelector("#control1");
const control2 = document.querySelector("#control2");
const control3 = document.querySelector("#control3");
const control4 = document.querySelector("#control4");


control1.addEventListener("click", () => {
    testmonial.style.transform = "translateX(0px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
})

control2.addEventListener("click", () => {
    testmonial.style.transform = "translateX(-900px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
})

control3.addEventListener("click", () => {
    testmonial.style.transform = "translateX(-1800px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
    control4.classList.remove("active");
})

control4.addEventListener("click", () => {
    testmonial.style.transform = "translateX(-2700px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.add("active");
})