const form = document.getElementById('contactForm');

if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const button = form.querySelector('button');
        button.innerText = 'Sending...';

        setTimeout(() => {
            alert('Message Sent Successfully!');
            button.innerText = 'Send Message';
            form.reset();
        }, 1500);
    });
}
const typingText = document.querySelector('.hero-text h3');

if(typingText){

    const words = [
        'Creative Frontend Developer',
        'Web Developer',
        'Full-Stack Developer',
        'Web Designer',
        'UI/UX Designer'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    function typeEffect(){

        currentWord = words[wordIndex];

        if(isDeleting){
            typingText.textContent = currentWord.substring(0, charIndex--);
        } else {
            typingText.textContent = currentWord.substring(0, charIndex++);
        }

        if(!isDeleting && charIndex === currentWord.length){
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

        if(isDeleting && charIndex === 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, isDeleting ? 60 : 120);
    }

    typeEffect();
}
const revealElements = document.querySelectorAll('.card, .project-card, .skill-card, .glass');

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
const heroImage = document.querySelector('.hero-image img');

if(heroImage){

    let position = 0;
    let direction = 1;

    setInterval(() => {

        position += direction * 0.5;

        heroImage.style.transform = `translateY(${position}px)`;

        if(position > 15 || position < -15){
            direction *= -1;
        }

    }, 30);
}

const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {

    icon.addEventListener('mouseenter', () => {
        icon.style.transform = "translateY(-10px) scale(1.15) rotate(5deg)";
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = "translateY(0) scale(1) rotate(0deg)";
    });

});
