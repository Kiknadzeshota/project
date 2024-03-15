const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navb");
const navClos = document.querySelector("#nav-clos")

navClos.addEventListener("click", () => {
    navMenu.classList.remove("active")
})

hamburger.addEventListener("click", () => {
    navMenu.classList.add("active");
})


const input = document.querySelector(".section-1-form-input-1")
const inputUl = document.querySelector(".input-ul")
const dd = document.querySelector('#input-ul-btn-1')

dd.addEventListener('click', () => {
    inputUl.classList.remove('show-in')
})

input.addEventListener("click", () => {
    inputUl.classList.toggle("show-in");

});

const input1 = document.querySelector(".section-1-form-div-1")
const formDvi = document.querySelector(".form-div-1-ul-div")

input1.addEventListener("click", () => {
    input1.classList.toggle("dispyle")
    formDvi.classList.toggle("dispyle")
});

const len = document.querySelector("#len");
const changeLen = document.querySelector(".change-leg")

    len.addEventListener("click", () => {
        len.classList.toggle("len-show")
        changeLen.classList.toggle("len-show")
    })
const footerc = document.querySelectorAll(".footer-h1")
const footerUl = document.querySelectorAll(".footer-ul")

footerc.forEach((e) => {
    footerc[0].addEventListener("click", () => {
        footerUl.forEach((i) => {
            footerUl[0].classList.toggle("footer-show")
        })
    })
    footerc[1].addEventListener("click", () => {
        footerUl.forEach((i) => {
            footerUl[1].classList.toggle("footer-show")
        })
    })
    footerc[2].addEventListener("click", () => {
            footerUl[2].classList.toggle("footer-show")
            footerUl[3].classList.toggle("footer-show")
            footerUl[4].classList.toggle("footer-show")
    })
})

const footerdow = document.querySelector("#footerdow")
const footerdowUl = document.getElementById("footerdowUl")
footerdow.addEventListener("click", () => {
    footerdowUl.classList.toggle("footer-end")
    footerdow.classList.toggle("activei")
})
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
})