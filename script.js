const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
// Toggle mobile menu open/close
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('open');
mobileMenu.classList.toggle('open');
document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
// Close menu when any nav link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
hamburger.classList.remove('open');
mobileMenu.classList.remove('open');
document.body.style.overflow = '';
});
})

// ── ABOUT SECTION SCROLL ANIMATIONS ──
// Adds the 'animate' class to each element when it scrolls into view
const animateTargets = document.querySelectorAll(
'.about-image-wrap, .about-hashtag, .about-heading, .about-paragraph, .about-built, .join-movement'
);
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('animate');
observer.unobserve(entry.target); // animate only once
}
});
}, { threshold: 0.15 });
animateTargets.forEach(el => observer.observe(el));

// ── FEATURES SECTION SCROLL ANIMATIONS ──
// Fades in the header and each card as they scroll into view
const featuresHeader = document.querySelector('.features-header');
const featureCards = document.querySelectorAll('.feature-card');
const featureObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('animate');
featureObserver.unobserve(entry.target);
}
});
}, { threshold: 0.15 });
// Observe the header
if (featuresHeader) {
featureObserver.observe(featuresHeader);
}
// Observe each card
featureCards.forEach(card => {
featureObserver.observe(card);
})

// ── PACKAGES SECTION SCROLL ANIMATIONS ──
// Animates the header and card as they scroll into view

const packagesHeader = document.querySelector('.packages-header');
const packageCard = document.querySelector('.package-card');

const packageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      packageObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Observe header
if (packagesHeader) {
  packageObserver.observe(packagesHeader);
}

// Observe card
if (packageCard) {
  packageObserver.observe(packageCard);
}


const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-item.active");

        if (openItem && openItem !== item) {
            openItem.classList.remove("active");
            openItem.querySelector(".accordion-content").style.maxHeight = 0;
        }

        item.classList.toggle("active");

        const content = item.querySelector(".accordion-content");

        if (item.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = 0;
        }
    });
});

