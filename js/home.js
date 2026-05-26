/* Loader */

window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("hidden");
});

/* Typing Effect */

const textArray = [
    "Motion Designer",
    "Graphic Designer",
    "Video Editor"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeText(){

    if(charIndex < textArray[textIndex].length){

        typingElement.textContent += textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }else{

        setTimeout(eraseText,1500);

    }
}

function eraseText(){

    if(charIndex > 0){

        typingElement.textContent =
        textArray[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseText,50);

    }else{

        textIndex++;

        if(textIndex >= textArray.length){
            textIndex = 0;
        }

        setTimeout(typeText,300);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    if(textArray.length){
        setTimeout(typeText,500);
    }

});

/* Mobile Menu */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Scroll Reveal */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();
/* Featured Work Hover Video */

const videos = document.querySelectorAll(".work-card video");

videos.forEach(video => {

    video.parentElement.addEventListener("mouseenter", () => {
        video.play();
    });

    video.parentElement.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

});