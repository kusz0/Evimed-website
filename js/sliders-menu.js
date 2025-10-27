
// about slider
const sliders = document.querySelector("main .aboutUs .sliders");
const slides = Array.from(sliders.children);

const leftArrow = document.querySelector("main .aboutUs .slider-btn-left");
const rightArrow = document.querySelector("main .aboutUs .slider-btn-right");

const dotsNav = document.querySelector("main .aboutUs .slider-nav");
const dots = Array.from(dotsNav.children);

let slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}

slides.forEach(setSlidePosition);

const moveToSlide = (sliders,currentSlide,targetSlide) => {
    sliders.style.transform = `translateX(-${targetSlide.style.left})`;

    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide")
};

const updateDots = (currentDot,targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
}
const hideArr = (targetIndex) => {
    if(targetIndex === 0) {
        leftArrow.classList.add("is-hidden");
        rightArrow.classList.remove("is-hidden");
    }else if(targetIndex === slides.length - 1) {
        leftArrow.classList.remove("is-hidden");
        rightArrow.classList.add("is-hidden");
    } else {
        leftArrow.classList.remove("is-hidden");
        rightArrow.classList.remove("is-hidden");
    }
}

leftArrow.addEventListener("click", e => {
    const currentSlide = sliders.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const targetIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(sliders,currentSlide,prevSlide);
    updateDots(currentDot,prevDot);
    hideArr(targetIndex);
});

rightArrow.addEventListener("click", e => {
    const currentSlide = sliders.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const targetIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(sliders,currentSlide, nextSlide);
    updateDots(currentDot,nextDot);
    hideArr(targetIndex);
});
dotsNav.addEventListener("click", e => {
    const targetDot = e.target.closest("button");
    
    if(!targetDot) return

    const currentSlide = sliders.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(sliders,currentSlide,targetSlide);
    updateDots(currentDot,targetDot);

    hideArr(targetIndex);
});


