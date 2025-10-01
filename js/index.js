let links = $("ul li");
links.click(function () {
    links.removeClass("active");
    $(this).addClass("active");
});
let LoadingPage = document.querySelector(".loading");
let btnToTop = document.querySelector(".totop");
let Home = document.querySelector("#Home").offsetTop;
let Chef = document.querySelector("#Chiefs");
let Menu = document.querySelector("#Menu");
let Book = document.querySelector("#Book");
let link1 = document.querySelector("nav li:nth-of-type(1)");
let link2 = document.querySelector("nav li:nth-of-type(2)");
let link3 = document.querySelector("nav li:nth-of-type(3)");
let link4 = document.querySelector("nav li:nth-of-type(4)");
let navHeight = document.querySelector("nav").clientHeight;
// ======================================
window.addEventListener("scroll", () => {
    let windowMove = window.scrollY;

    if (windowMove >= 150) { 
        btnToTop.classList.add("show");
    } else {
        btnToTop.classList.remove("show");
    }
});

window.addEventListener("load",() => {
    setTimeout(() => {
        LoadingPage.classList.add("loaded");
    },2000)
})

scrollSpy();
scrolling();