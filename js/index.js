/* MENU */
const menu = document.getElementById("menu")

const openMenu = () => {
    menu.className = menu.className.replace("nav-close"," nav-open")
    document.body.style.overflow = 'hidden';
    
}

const closeMenu = () => {
    menu.className = menu.className.replace("nav-open"," nav-close")
    document.body.style.overflow = 'auto';
}
/* SLIDERSHOW */
const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("slide_card");
    let dots = document.getElementsByClassName("dot");

    if( n > slides.length) { slideIndex = 1}
    if( n < 1) {slideIndex = slides.length}

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active","");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);
