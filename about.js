/* MOBILE MENU */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* REVEAL EFFECT */

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);
revealElements();

/* SKILL BAR ANIMATION */

const skillBars = document.querySelectorAll(".skill-fill");

function animateSkills(){

    skillBars.forEach(bar => {

        const top = bar.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){
            bar.classList.add("active");
        }

    });

}

window.addEventListener("scroll", animateSkills);
animateSkills();