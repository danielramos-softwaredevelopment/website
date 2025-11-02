// SELECT ALL NAV BAR LINKS WITH HASHES
const navlinks = document.querySelectorAll('a[href^="#"]');

navlinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault(); //PREVENT DEFAULT JUMP

        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start' //ALIGN TO TOP
        });
    });
});