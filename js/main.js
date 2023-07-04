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

const testmonial = document.querySelector("#testmonial");
const control1 = document.querySelector("#control1");
const control2 = document.querySelector("#control2");
const control3 = document.querySelector("#control3");
const control4 = document.querySelector("#control4");


control1.addEventListener("click", () => {
    testmonial.style.transform = "translateX(0px)";
    control1.classList.add("active2");
    control2.classList.remove("active2");
    control3.classList.remove("active2");
    control4.classList.remove("active2");
})

control2.addEventListener("click", () => {
    testmonial.style.transform = "translateX(-900px)";
    control1.classList.remove("active2");
    control2.classList.add("active2");
    control3.classList.remove("active2");
    control4.classList.remove("active2");
})

control3.addEventListener("click", () => {
    testmonial.style.transform = "translateX(-1800px)";
    control1.classList.remove("active2");
    control2.classList.remove("active2");
    control3.classList.add("active2");
    control4.classList.remove("active2");
})

control4.addEventListener("click", () => {
    testmonial.style.transform = "translateX(-2700px)";
    control1.classList.remove("active2");
    control2.classList.remove("active2");
    control3.classList.remove("active2");
    control4.classList.add("active2");
})






//-------------- To Top Button

const toTop = document.querySelector(".to-top");


window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        toTop.classList.add("active3");
    } else {
        toTop.classList.remove("active3");
    }
})


//-------------- Upload data to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbwxWzYkVtV28t6pjFCQHOTBpjbwUNUL098W6L4g2ov1F---Ve4svGXjJ4ahyZI3EdbB/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})