const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = Array.from(navLinks.querySelectorAll('a'));

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinksItems.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        // Get the target sections ID from the href attribute
        const targetId = link.getAttribute('href').substring(1);
        // Get the target section element 
        const targetSection = document.getElementById(targetId);
        // Scroll to the target section with smooht behavior
        if(targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth'});
        } 
        // close the navigation menu if its open (optional)
        navLinks.classList.remove('active');
    });
});