const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navb");
const navClos = document.querySelector("#nav-clos")

navClos.addEventListener("click", () => {
    navMenu.classList.remove("active")
})

hamburger.addEventListener("click", () => {
    navMenu.classList.add("active");
})
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

const caruseitems = document.querySelectorAll(".internalPage_1 img")
const right = document.querySelector("#right")
const left = document.querySelector("#left")

let index = 0
right.addEventListener("click", () => {
    if(index == caruseitems.length - 1){
        caruseitems[index].classList.remove("active");
        index = 0;
        caruseitems[index].classList.add("active");
    }else{
        caruseitems[index].classList.remove("active");
        index++;
        caruseitems[index].classList.add("active");
    }
})

left.addEventListener("click", () => {
    if(index == 0 ){
        caruseitems[index].classList.remove("active");
        index = caruseitems.length - 1;
        caruseitems[index].classList.add("active");
    }else{
        caruseitems[index].classList.remove("active");
        index--;
        caruseitems[index].classList.add("active");
    }
})

const footerdow = document.querySelector("#footerdow")
const footerdowUl = document.getElementById("footerdowUl")
footerdow.addEventListener("click", () => {
    footerdowUl.classList.toggle("footer-end")
    footerdow.classList.toggle("activei")
})

const btn = document.getElementById("col-lg-6-but") 
const col6 = document.querySelectorAll(".col-6")
btn.addEventListener("click", ()=>{
    col6.forEach((elem) => {
        elem.classList.toggle("active-col-6")
    })
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
                items:3
            },
            1000:{
                items:4
            }
        }
    })
})