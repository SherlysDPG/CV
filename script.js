// Animación de entrada para los elementos con diferentes delays
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateY(30px) scale(0.95)";

      setTimeout(() => {
        entry.target.style.transition =
          "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0) scale(1)";
      }, index * 100);

      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar elementos para animación
document
  .querySelectorAll(".experience-item, .education-item, .summary")
  .forEach((el) => {
    observer.observe(el);
  });

// Efecto de hover en las skill tags
document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1) rotate(2deg)";
  });

  tag.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });
});

// Imprimir CV
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "p") {
    e.preventDefault();
    window.print();
  }
});
