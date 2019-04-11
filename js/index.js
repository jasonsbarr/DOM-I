const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/*
 * Task 1: Selectors
 */

// Header
const nav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('nav a');

// CTA
const ctaHeader = document.querySelector('.cta h1');
const ctaBtn = document.querySelector('.cta button');
const ctaImg = document.querySelector('#cta-img');

// Main content - top content
const topTextContents = document.querySelectorAll('.top-content .text-content');
topTextContents[0].id = 'features';
topTextContents[1].id = 'about';
const features = document.querySelector('#features');
const about = document.querySelector('#about');

// Middle img
const middleImg = document.querySelector('#middle-img');

// Main content - bottom content
const bottomTextContents = document.querySelectorAll('.bottom-content .text-content');
bottomTextContents[0].id = 'services';
bottomTextContents[1].id = 'product';
bottomTextContents[2].id = 'vision';
const services = document.querySelector('#services');
const product = document.querySelector('#product');
const vision = document.querySelector('#vision');

// Contact
const contact = document.querySelector('.contact');
const contactParas = contact.querySelectorAll('p');

// Footer
const copyright = document.querySelector('footer p');

/*
 * Task 2: Update HTML
 */
// Header
const navKeys = Object.keys(siteContent.nav).filter(key => key.includes('item'));
navKeys.forEach((_, i) => {
  navLinks[i].textContent = siteContent.nav[navKeys[i]];
});

// CTA
ctaHeader.innerHTML = siteContent.cta.h1.split(' ').join('<br>');
ctaBtn.textContent = siteContent.cta.button;
ctaImg.src = siteContent.cta['img-src'];

// Top Content Section
features.querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
features.querySelector('p').textContent = siteContent["main-content"]["features-content"];
about.querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
about.querySelector('p').textContent = siteContent["main-content"]["about-content"];

// Middle img
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Bottom Content Section
services.querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
services.querySelector('p').textContent = siteContent["main-content"]["services-content"];
product.querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
product.querySelector('p').textContent = siteContent["main-content"]["product-content"];
vision.querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
vision.querySelector('p').textContent = siteContent["main-content"]["vision-content"];

// Contact
contact.querySelector('h4').textContent = siteContent.contact["contact-h4"];
contactParas[0].innerHTML = siteContent.contact.address.split('t S').join('t<br>S');
contactParas[1].textContent = siteContent.contact.phone;
contactParas[2].textContent = siteContent.contact.email;

// Copyright
copyright.textContent = siteContent.footer.copyright;

/*
 * Add new content
 */
navLinks.forEach(link => link.style.color = 'green');
const home = document.createElement('a');
home.href = '#';
home.textContent = 'Home';
home.style.color = 'green';
nav.prepend(home);

const design = document.createElement('a');
design.href = '#';
design.textContent = 'Design'
design.style.color = 'green';
nav.appendChild(design);
