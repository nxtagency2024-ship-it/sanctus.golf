// ===============================
// Sanctus Golf
// Premium Interactions
// ===============================

// ===============================
// Hamburger Menu
// ===============================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("open");
    });

    document.querySelectorAll("nav ul a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("open");
        });
    });
}

// ===============================
// Scroll Reveal
// ===============================

const revealElements = document.querySelectorAll("section");

function reveal() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// ===============================
// Navbar Background
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 60) {
        header.style.background = "rgba(10,10,10,.92)";
    } else {
        header.style.background = "rgba(15,17,21,.75)";
    }

});

// ===============================
// Hero Fade
// ===============================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero-content");

    if (!hero) return;

    hero.style.opacity = 1 - window.scrollY / 700;

});

// ===============================
// Button Hover Animation
// ===============================

document.querySelectorAll("a").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0px)";
    });

});

// ===============================
// Daily Scripture
// ===============================

function getDayOfYear(date) {

    const start = new Date(date.getFullYear(), 0, 1);

    const diff = date - start;

    return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

}

document.addEventListener("DOMContentLoaded", () => {

    if (!window.sgDevotionals) {

        console.error("verses.js failed to load.");

        return;

    }

    const today = new Date();

    const day = getDayOfYear(today);

    const devotion = window.sgDevotionals.find(item => item.day === day);

    if (!devotion) {

        console.error("No devotion found for day:", day);

        return;

    }

    const verseText = document.getElementById("verse-text");
    const verseReference = document.getElementById("verse-reference");
    const golfThought = document.getElementById("golf-thought");

    if (verseText)
        verseText.textContent = `"${devotion.verse}"`;

    if (verseReference)
        verseReference.textContent = devotion.reference;

    if (golfThought)
        golfThought.textContent = devotion.golf;

});
