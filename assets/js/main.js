/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
if(navToggle){
            navToggle.addEventListener('click', ()=>{
                navMenu.classList.add('show-menu')
            })
        }
if(navClose){
            navClose.addEventListener('click', ()=>{
                navMenu.classList.remove('show-menu')
            })
        }
        
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header');

    // When the scroll is greater than 50 viewport height, add the blur-header class
    if (window.scrollY >= 50) {
        header.classList.add('blur-header');
    } else {
        header.classList.remove('blur-header');
    }
}

window.addEventListener('scroll', scrollHeader);
/*=============== EMAIL JS ===============*/
emailjs.init('your_public_key'); // Initialize EmailJS with your public key

    const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact__message');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ntvzkf3', 'template_jc9tp4q', '#contact-form', 'OoJmYeiBKSt-HTLK0')
            .then(() => {
                contactMessage.textContent = 'Message sent successfully!';
                contactMessage.style.color = 'green';
                contactForm.reset();
                setTimeout(() => { contactMessage.textContent = ''; }, 5000);
            }, () => {
                contactMessage.textContent = 'Message not sent! Please try again later.';
                contactMessage.style.color = 'red';
                setTimeout(() => { contactMessage.textContent = ''; }, 5000);
            });
    };

    contactForm.addEventListener('submit', sendEmail);

// Add event listener for form submission
contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]'); // Corrected 'selection' to 'section'

const scrollActive = () => {
    const scrollY = window.pageYOffset; // Use pageYOffset for vertical scrolling

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // Offset value for sticky header height
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
});

// Reveal multiple selectors (comma-separated string for multiple selectors)
sr.reveal('.home__data, .home__social, .contact__container, .footer__container');
sr.reveal('.home__image', {origin: 'bottom'});

sr.reveal('.about__data, .skills__data', {origin: 'left'});
sr.reveal('.about__image, .skills__content', {origin: 'right'});

sr.reveal('.services__card, .projects__card', {interval:100});