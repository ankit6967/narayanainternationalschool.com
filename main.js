document.addEventListener("DOMContentLoaded", function () {
  const academicSlider = new Splide("#academic-slider", {
    type: "loop",
    perPage: 3,
    gap: "2rem",
    padding: "1rem",
    pagination: false,
    arrows: true,
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2 },
      640: { perPage: 1, padding: "2rem" },
    },
  }).mount();

  const testimonialSlider = new Splide("#testimonial-slider", {
    type: "loop",
    perPage: 3,
    gap: "1.5rem",
    padding: "0.5rem",
    pagination: true,
    arrows: false,
    breakpoints: {
      1024: { perPage: 2 },
      640: { perPage: 1, padding: "0rem" },
    },
  }).mount();

  const programsSlider = new Splide("#programs-slider", {
    type: "loop",
    perPage: 4,
    gap: "1.5rem",
    padding: "1rem",
    pagination: false,
    arrows: false,
    breakpoints: {
      1280: { perPage: 4 },
      1024: { perPage: 3 },
      768: { perPage: 2 },
      640: { perPage: 1, padding: "0.5rem", arrows: true, pagination: true },
    },
  }).mount();

  AOS.init({ once: true, offset: 50, duration: 800, easing: "ease-out-cubic" });

  const counterObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        const counters = document.querySelectorAll(".counter");
        const frameDuration = 1000 / 60;
        const frameCount = 120;

        counters.forEach(function (counter) {
          const target = counter.getAttribute("data-target");
          const ratioParts = target.includes(":")
            ? target.split(":").map(Number)
            : null;
          const isRatio =
            ratioParts &&
            ratioParts.length === 2 &&
            ratioParts.every(Number.isFinite);
          const numericTarget = Number.parseInt(target, 10);
          let frame = 0;

          const interval = setInterval(function () {
            frame++;
            const progress = frame / frameCount;
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            if (isRatio) {
              const [first, second] = ratioParts;
              counter.textContent = `${Math.round(
                first * easedProgress,
              )}:${Math.round(second * easedProgress)}`;
            } else {
              counter.textContent = String(
                Math.round(numericTarget * easedProgress),
              );
            }

            if (frame === frameCount) {
              clearInterval(interval);
              counter.textContent = target;
            }
          }, frameDuration);
        });

        observer.disconnect();
      });
    },
    { threshold: 0.5 },
  );

  const heroStats = document.getElementById("hero-stats");
  if (heroStats) counterObserver.observe(heroStats);

  window.addEventListener("load", function () {
    academicSlider.refresh();
    testimonialSlider.refresh();
    programsSlider.refresh();
  });

  document.querySelectorAll(".faq-toggle").forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const answer = toggle.nextElementSibling;
      const icon = toggle.querySelector(".faq-icon");
      answer.classList.toggle("hidden");
      if (answer.classList.contains("hidden")) {
        icon.classList.add("rotate-180");
      } else {
        icon.classList.remove("rotate-180");
      }
    });
  });

  const admissionModal = document.getElementById("admission-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalContent = document.getElementById("modal-content");
  const closeModalButton = document.getElementById("close-modal-btn");

  function openModal() {
    admissionModal.classList.remove("hidden");
    admissionModal.classList.add("flex");
    document.body.classList.add("overflow-hidden");
    setTimeout(function () {
      modalBackdrop.classList.remove("opacity-0");
      modalBackdrop.classList.add("opacity-100");
      modalContent.classList.remove("opacity-0", "scale-95");
      modalContent.classList.add("opacity-100", "scale-100");
    }, 10);
  }

  function closeModal() {
    modalBackdrop.classList.remove("opacity-100");
    modalBackdrop.classList.add("opacity-0");
    modalContent.classList.remove("opacity-100", "scale-100");
    modalContent.classList.add("opacity-0", "scale-95");
    document.body.classList.remove("overflow-hidden");
    setTimeout(function () {
      admissionModal.classList.add("hidden");
      admissionModal.classList.remove("flex");
    }, 300);
  }

  document.querySelectorAll(".open-modal-btn").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      openModal();
    });
  });
  closeModalButton.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !admissionModal.classList.contains("hidden")) {
      closeModal();
    }
  });
  if (admissionModal) setTimeout(openModal, 10000);
});
