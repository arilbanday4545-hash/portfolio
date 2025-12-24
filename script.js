// Inisialisasi AOS (Animasi Scroll)
AOS.init({ duration: 1000, once: false });

// Animasi Mengetik
new Typed("#typed-text", {
  strings: ["Web Developer", "UI Designer", "Video Editor", "Canva Expert"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

// Deteksi Scroll untuk Navigasi Aktif
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });
  document.querySelectorAll("nav ul li a").forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});
