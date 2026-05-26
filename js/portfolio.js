/* MOBILE MENU */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


/* REVEAL ANIMATION */

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);
revealElements();


/* FILTER BUTTONS */

const filterBtns = document.querySelectorAll(".filter-btn");
const categories = document.querySelectorAll(".portfolio-category");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        categories.forEach(category => {

            if (category.classList.contains(filter)) {
                category.style.display = "block";
            } else {
                category.style.display = "none";
            }

        });

    });

});


/* VIDEO POPUP MODAL */

const playBtns = document.querySelectorAll(".play-btn");
const modal = document.querySelector(".video-modal");
const portfolioVideo = document.getElementById("portfolioVideo");
const closeVideo = document.querySelector(".close-video");

playBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const videoSrc = btn.dataset.video;

        portfolioVideo.src = videoSrc;
        portfolioVideo.muted = false;

        modal.style.display = "flex";

        portfolioVideo.load();
        portfolioVideo.play();

    });

});


if (closeVideo) {

    closeVideo.addEventListener("click", () => {

        modal.style.display = "none";

        portfolioVideo.pause();
        portfolioVideo.currentTime = 0;

    });

}


if (modal) {

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

            portfolioVideo.pause();
            portfolioVideo.currentTime = 0;

        }

    });

}


/* IMAGE LIGHTBOX */

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const images = document.querySelectorAll(".lightbox-image");
const closeLightbox = document.querySelector(".close-lightbox");

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = image.src;

    });

});


if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}


/* MOTION VIDEO HOVER PREVIEW */

const previewVideos = document.querySelectorAll(".motion-video");

previewVideos.forEach(video => {

    const card = video.closest(".portfolio-card");

    card.addEventListener("mouseenter", () => {

        video.muted = true;
        video.play();

    });

    card.addEventListener("mouseleave", () => {

        video.pause();
        video.currentTime = 0;

    });

});


/* DEFAULT TAB */

window.addEventListener("load", () => {

    categories.forEach(category => {

        if (category.classList.contains("motion")) {
            category.style.display = "block";
        } else {
            category.style.display = "none";
        }

    });

});