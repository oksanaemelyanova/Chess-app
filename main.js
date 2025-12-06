let counter = 0;
let slides;
//let currentSlide = 0; //not using?



function ft_showSlide(n) {
    if (!slides || slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    counter = (n + slides.length) % slides.length;

    slides[counter].classList.add('active');
}

function changeSlide (n) {
    ft_showSlide(counter + n);
}


//generate carousel elements
function loadCarouselImages() {
    const carousel = document.getElementById("carousel");
    const totalImges = 15;

    for (let i = 1; i <= totalImges; i++) {
        const slide = document.createElement("div");
        slide.classList.add("carousel-slide");
        if (i === 1) slide.classList.add("active");

        const img = document.createElement("img");
        img.src = `./img${i}.jpg`;
        img.alt = `carousel image ${i}`;

        slide.appendChild(img);
        carousel.appendChild(slide);
    }

    //nav buttons
    const prevBnt = document.createElement("button");
    prevBnt.className = "carousel-btn prev";
    prevBnt.innerHTML = "&#10094;";
    

    const nextBtn = document.createElement("button");
    nextBtn.className = "carousel-btn next";
    nextBtn.innerHTML = "&#10095;";
    

    carousel.appendChild(prevBnt);
    carousel.appendChild(nextBtn);

    slides = document.getElementsByClassName('carousel-slide');
    prevBnt.addEventListener("click", () => {
        changeSlide(-1);
    });

    nextBtn.addEventListener("click", () => {
        changeSlide(1);
    });

    ft_showSlide(0);
}

//load the carousel
window.onload = loadCarouselImages;

//modal
const modal = document.getElementById("feedbackModal");
const openBtn = document.getElementById("openFeedback");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => {
    modal.style.display = "block";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

//----------------------//
//                      //
//   Mobile view toggle //
//                      //
//----------------------//

//---Option 1 to use a separate html block for mobile menu ----//
// const burger = document.getElementById("burger");
// const mobileMenu = document.getElementById("mobile-menu");

// burger.addEventListener("click", () => {
//     mobileMenu.style.display =
//         mobileMenu.style.display === "flex" ? "none" : "flex";
// });


//----- Option 2 - to use same nav bar but style it differently in media query ----//

const burgerBtn = document.getElementById("burger");
const navMenu = document.querySelector("nav.navigation");

burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


