document.addEventListener("DOMContentLoaded", () => {
    setGreeting();
    enableActiveNavigation();
    enableRevealOnScroll();
    enableCopyEmail();
});

function setGreeting() {
    const target = document.getElementById("Bifrost");
    if (!target) return;

    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source");

    const messages = {
        github: "Willkommen! Schön, dass du über GitHub hier bist. Auf dieser Seite findest du einen Überblick über meine Projekte, Fähigkeiten und meinen aktuellen Entwicklungsstand.",
        linkedin: "Herzlich willkommen! Schön, dass Sie über LinkedIn hierher gefunden haben. Diese Seite gibt Ihnen einen kompakten Überblick über meine Projekte und Fähigkeiten als angehender Anwendungsentwickler.",
        direct: "Willkommen! Schön, dass Sie direkt auf meiner Portfolio-Seite gelandet sind.",
        "qr-code": "Willkommen! Schön, dass wir uns offenbar bereits persönlich begegnet sind. Hier finden Sie einen strukturierten Überblick über mein Portfolio.",
        datenschutz: "Willkommen zurück von der Datenschutzerklärung."
    };

    target.textContent =
        messages[utmSource] ||
        "Willkommen auf meinem Portfolio. Hier finden Sie einen Überblick über meine Projekte, Fähigkeiten und meinen aktuellen Entwicklungsstand.";
}

function enableActiveNavigation() {
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

    if (!navLinks.length) return;

    const sections = Array.from(navLinks)
        .map(link => {
            const targetId = link.getAttribute("href");
            return document.querySelector(targetId);
        })
        .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const currentId = `#${entry.target.id}`;

                navLinks.forEach(link => {
                    const isActive = link.getAttribute("href") === currentId;
                    link.classList.toggle("active", isActive);
                });
            });
        },
        {
            threshold: 0.4,
            rootMargin: "-10% 0px -40% 0px"
        }
    );

    sections.forEach(section => observer.observe(section));
}

function enableRevealOnScroll() {
    const revealElements = document.querySelectorAll(".reveal");

    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");
                currentObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -10% 0px"
        }
    );

    revealElements.forEach(element => observer.observe(element));
}

function enableCopyEmail() {
    const button = document.querySelector("[data-copy-email]");
    const feedback = document.querySelector("[data-copy-feedback]");

    if (!button) return;

    button.addEventListener("click", async () => {
        const email = button.getAttribute("data-copy-email");
        if (!email) return;

        try {
            await navigator.clipboard.writeText(email);

            if (feedback) {
                feedback.textContent = "E-Mail kopiert.";
                feedback.classList.add("show");

                window.setTimeout(() => {
                    feedback.classList.remove("show");
                }, 2000);
            }
        } catch (error) {
            if (feedback) {
                feedback.textContent = "Kopieren nicht möglich.";
                feedback.classList.add("show");
            }

            console.error("Fehler beim Kopieren der E-Mail:", error);
        }
    });
}