/* =========================================
   ELBASEETY INSTITUTE - NAVIGATION LOGIC
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Select the toggle button and the navigation menu
  const menuBtn = document.querySelector(".eb-mobile-toggle");
  const navMenu = document.querySelector(".eb-menu-wrapper");
  const navLinks = document.querySelectorAll(".eb-nav-item");

  // 1. Toggle Menu on Button Click
  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      // Toggle the 'X' animation on the hamburger bars
      menuBtn.classList.toggle("is-active");

      // Toggle the visibility of the mobile menu
      navMenu.classList.toggle("is-open");

      // Prevent body scrolling when menu is open
      if (navMenu.classList.contains("is-open")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });
  }

  // 2. Close Menu when a link is clicked (Optional but recommended)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("is-active");
      navMenu.classList.remove("is-open");
      document.body.style.overflow = "auto";
    });
  });

  // 3. Close Menu if user clicks outside of it
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnBtn = menuBtn.contains(event.target);

    if (
      !isClickInsideMenu &&
      !isClickOnBtn &&
      navMenu.classList.contains("is-open")
    ) {
      menuBtn.classList.remove("is-active");
      navMenu.classList.remove("is-open");
      document.body.style.overflow = "auto";
    }
  });
});
