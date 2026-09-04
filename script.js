const sidebar = document.getElementById("sidebar");
const toggle = document.getElementById("sidebarToggle");
const links = [...document.querySelectorAll(".side-link")];
const sections = [...document.querySelectorAll(".report-section[id]")];

toggle?.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

links.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      links.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  {
    rootMargin: "-28% 0px -58% 0px",
    threshold: 0
  }
);

sections.forEach(section => observer.observe(section));
