
const BUTTONDERECHA = document.querySelector("#button1");
const BUTTONDIZQUERDA = document.querySelector("#button2")
const SLIDER = document.querySelector(".slider");
const slideWidth = SLIDER.offsetWidth;

BUTTONDERECHA.addEventListener("click", ()=>{
    SLIDER.scrollBy({ left: slideWidth, behavior: 'smooth' });
});

BUTTONDIZQUERDA.addEventListener("click", ()=>{
    SLIDER.scrollBy({ left: -slideWidth, behavior: 'smooth' });
});