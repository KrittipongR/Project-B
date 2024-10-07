//Smooth Scroll Function

document.querySelectorAll('nav a').forEach(anchor =>{
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth'})
    })
})

document.querySelector('.main-section button').addEventListener('click', function(e){
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({behavior: 'smooth'})
})

const backToTopButton = document.getElementById('backToTop');

window.onscroll = function(){
    if(document.body.scrollTop>200 || document.documentElement.scrollTop > 200){
        backToTopButton.style.display = 'block';
    } else{
        backToTopButton.style.display = 'none';
    }
}
backToTopButton.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Carousel

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 1){
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0){
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel(){
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

//Contact Form

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //Simple Validation

    const name = document.getElementById('name').ariaValueMax.trim();
    const email = document.getElementById('email').ariaValueMax.trim();
    const message = document.getElementById('message').ariaValueMax.trim();

    if(name === '' || email === '' || message === ''){
        formMessage.textContent = 'All fields are required!';
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Thank you! Your message has been sent.';
        formMessage.style.color = 'green';
    }
});

