
// menu bar on mobile screen 
let myUl=document.querySelector(".ul_items");

let dropDown = document.querySelector(".hamburger");

dropDown.addEventListener("click", function () {
    myUl.classList.toggle("active");
   
});

 window.addEventListener("click", function (e) {
    if (e.target !== myUl && e.target !== dropDown) {
        myUl.classList.remove("active");
    }
})

// sticky header

window.addEventListener("scroll", function () {
    let head = document.querySelector("header");
    head.classList.toggle("sticky", window.scrollY > 0)
})

// scroll to top


let up = document.querySelector(".up");
window.addEventListener("scroll", function () {
    up.classList.toggle("show", this.window.scrollY >= 500)
});
up.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


let date = new Date().getFullYear();

document.querySelector(".date").innerHTML = date;