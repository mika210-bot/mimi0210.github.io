// main.js

const sections = document.querySelectorAll("section");

const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
