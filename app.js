const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // toggle nav
    navLinks.classList.toggle("open");
  });
  // animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 1.5
      }s`;
    }
  });
  // burger animations
  burger.classList.toggle("toggle");
};

navSlide();

type="text/javascript">
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY >0 );
});