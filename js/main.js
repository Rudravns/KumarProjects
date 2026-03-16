// Reveal animation when elements enter viewport

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });
}, {
    threshold: 0.1
});


document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
});


// Scroll reactive animation

let isScrolling = false;

window.addEventListener("scroll", () => {

    if (!isScrolling) {

        window.requestAnimationFrame(() => {

            document.querySelectorAll(".reveal.active").forEach((el) => {

                const rect = el.getBoundingClientRect();

                const viewportCenter = window.innerHeight / 2;
                const elementCenter = rect.top + rect.height / 2;

                const distanceFromCenter =
                    (elementCenter - viewportCenter) / viewportCenter;

                const intensity =
                    Math.max(0, 1 - Math.abs(distanceFromCenter) * 2);

                el.style.setProperty(
                    "--scroll-scale",
                    1 + (intensity * 0.03)
                );

                el.style.setProperty(
                    "--scroll-y",
                    `${distanceFromCenter * -12}px`
                );

            });

            isScrolling = false;

        });

        isScrolling = true;

    }

});


// PARTICLE BACKGROUND

const particleContainer = document.getElementById("particles");

for(let i = 0; i < 26; i++){

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particleContainer.appendChild(particle);
}

// SIDEBAR LOGIC
const sidebar = document.getElementById("sidebar");
const openSidebarBtn = document.querySelector(".nav-projects-link");
const closeSidebarBtn = document.querySelector(".closebtn");

if (openSidebarBtn && sidebar && closeSidebarBtn) {
    let closeTimeout;

    const open = () => {
        clearTimeout(closeTimeout); // Cancel any pending close actions
        sidebar.classList.add("active");
    };

    const close = () => {
        sidebar.classList.remove("active");

    };

    const startCloseTimer = () => {
        // Set a timer to close the sidebar, giving the user time to move their mouse
        closeTimeout = setTimeout(close, 300);
    };

    openSidebarBtn.addEventListener("mouseenter", open);
    sidebar.addEventListener("mouseenter", open); // Also keep open if mouse enters sidebar

    openSidebarBtn.addEventListener("mouseleave", startCloseTimer);
    sidebar.addEventListener("mouseleave", startCloseTimer);

    closeSidebarBtn.addEventListener("click", (e) => {
        e.preventDefault();
        clearTimeout(closeTimeout); // Immediately close on click
        close();
    });
}

// HIGHLIGHT ACTIVE SIDEBAR LINK
const currentPage = window.location.pathname.split("/").pop() || "index.html";

if (currentPage !== "index.html") {
    document.querySelectorAll("#sidebar a").forEach((link) => {
        const href = link.getAttribute("href");
        
        // Skip links that are just "#" or empty
        if (!href || href === "#") return;
    
        const linkPage = href.split("#")[0];
    
        // Match if the filename is the same
        if (linkPage === currentPage) {
            link.classList.add("active-link");
        }
    });
}

// MOUSE MOVE EFFECT FOR CARDS (SPOTLIGHT)
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    });
});