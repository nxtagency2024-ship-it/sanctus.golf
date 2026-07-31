// ===============================
// Sanctus Golf
// Premium Interactions
// ===============================

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
});

// Close menu when clicking a link
document.querySelectorAll("nav ul a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("open");
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll("section");

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

// Navbar Background
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 60){

        header.style.background="rgba(10,10,10,.92)";

    }else{

        header.style.background="rgba(15,17,21,.75)";

    }

});

// Hero Fade
window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero-content");

    hero.style.opacity=1-window.scrollY/700;

});

// Smooth Button Hover
document.querySelectorAll("a").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});
/* ===========================
   Animations
=========================== */

section{

opacity:0;

transform:translateY(70px);

transition:.8s;

}

section.show{

opacity:1;

transform:translateY(0);

}

/* Mobile Menu */

nav ul.active{

display:flex;

position:absolute;

top:80px;

left:0;

width:100%;

padding:35px;

background:#111;

flex-direction:column;

text-align:center;

gap:30px;

animation:slideDown .35s;

}

@keyframes slideDown{

from{

opacity:0;

transform:translateY(-20px);

}

to{

opacity:1;

transform:translateY(0);

}
}
/* ==========================
   Daily Verse
========================== */

.daily-verse{
    background:#12161d;
    padding:90px 20px;
}

.verse-container{
    max-width:900px;
    margin:auto;
    text-align:center;
}

.verse-label{
    color:#D8B86B;
    letter-spacing:3px;
    font-size:13px;
    margin-bottom:25px;
}

#verse-text{
    font-family:"Cormorant Garamond", serif;
    font-size:42px;
    line-height:1.5;
    color:white;
    margin-bottom:20px;
}

#verse-reference{
    color:#A9AFB8;
    font-size:20px;
    margin-bottom:45px;
}

.golf-devotional{
    background:#181C22;
    border-radius:20px;
    padding:35px;
    border:1px solid rgba(255,255,255,.08);
}

.golf-devotional h3{
    color:#D8B86B;
    margin-bottom:15px;
}

#golf-thought{
    color:#d7d7d7;
    line-height:1.8;
    font-size:18px;
}
