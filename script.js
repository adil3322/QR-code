 // ==========================
// Theme Toggle
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.innerHTML = "🌞";
    }else{
        themeBtn.innerHTML = "🌙";
    }

});


// ==========================
// QR Code
// ==========================

const portfolioURL = "https://adil3322.github.io/portfolio/";

QRCode.toCanvas(
    portfolioURL,
    {
        width:180,
        margin:2
    },
    function(error, canvas){

        if(error){
            console.log(error);
            return;
        }

        document.getElementById("qrcode").appendChild(canvas);

    }
);


// ==========================
// Portfolio Button
// ==========================

document.querySelectorAll(".btn")[0].addEventListener("click",function(e){

    e.preventDefault();

    window.open(
        "https://adil3322.github.io/portfolio/",
        "_blank"
    );

});


// ==========================
// Resume Button
// ==========================

document.querySelectorAll(".btn")[1].addEventListener("click",function(e){

    e.preventDefault();

    window.open(
        "assets/resume.pdf",
        "_blank"
    );

});


// ==========================
// Social Links
// ==========================

const socialLinks = {

    github:"https://github.com/adil332",

    linkedin:"https://linkedin.com/in/adil-alam-a05339288",

    instagram:"https://instagram.com/",

    whatsapp:"https://wa.me/919608211167"

};

const socialButtons = document.querySelectorAll(".social a");

socialButtons[0].href = socialLinks.github;

socialButtons[1].href = socialLinks.linkedin;

socialButtons[2].href = socialLinks.instagram;

socialButtons[3].href = socialLinks.whatsapp;


// Open all links in new tab

socialButtons.forEach(btn=>{

    btn.target="_blank";

});


// ==========================
// Navbar Active Effect
// ==========================

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(item=>item.style.color="white");

link.style.color="#38bdf8";

});

});


// ==========================
// Welcome Message
// ==========================

console.log("Welcome to LinkHub 🚀");


// ==========================
// Smooth Fade Animation
// ==========================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(

[
{opacity:0,transform:"translateY(40px)"},
{opacity:1,transform:"translateY(0px)"}
],

{
duration:700,
fill:"forwards"
}

);

}

});

});

sections.forEach(section=>{

observer.observe(section);

});
