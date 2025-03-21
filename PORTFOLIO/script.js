"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    // Effetto di scorrimento attivo sulla navbar
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;
        navLinks.forEach(link => {
            const href = link.getAttribute("href");
            let section = href ? document.querySelector(href) : null;
            if (section && section instanceof HTMLElement &&
                section.offsetTop <= fromTop + 100 &&
                section.offsetTop + section.offsetHeight > fromTop + 100) {
                navLinks.forEach(link => link.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
    // Animazione smooth per lo scrolling
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");
            const targetId = href ? href.substring(1) : "";
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
