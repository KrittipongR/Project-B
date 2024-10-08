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

document.addEventListener("DOMContentLoaded", function(){
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        //Simple Validation

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('Message').value.trim();
        
        //Basic validation

        if(name === '' || email === '' || message === ''){
            formMessage.textContent = 'All fields are required!';
            formMessage.style.color = 'red';
        } else {
            submitFormWithAjax(name, email, message);
            formMessage.textContent = 'Thank you! Your message has been sent.';
            formMessage.style.color = 'green';
        }
    });

    function submitFormWithAjax(name, email, message){
        //Create JS object

        const formData = {
            name: name,
            email: email,
            message: message
        };

        console.log("Form Data: ", formData);

        fetch("https://script.google.com/macros/s/AKfycbzIORk4NvsZ1EWmxEtbQBPED4GuHhQUrJOtWj152n97V8aQ_R8_GvEKB6dZITuBEOU/exec", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Form submitted successfully! ", data);
            alert("Your message has been sent successfully!");
        })
        .catch(error => {
            console.log("Error:  ", error);
            alert("There was an error submitting the form.");
        })
    }
})

