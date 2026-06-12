// ==========================
// DARK MODE
// ==========================

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }

    toggleBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.textContent = "🌙";
        }

    });
}

// ==========================
// MOBILE MENU
// ==========================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });

}

// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    const updateCounter = () => {

        const current = Number(counter.innerText.replace(/,/g, ""));
        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText = Math.min(current + increment, target).toLocaleString();

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    updateCounter();

});

// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}