document.addEventListener("DOMContentLoaded", () => {
  const mobileTrigger = document.querySelector(".eb-mobile-trigger");
  const menuWrapper = document.querySelector(".eb-menu-wrapper");
  const body = document.body;
  const navRoot = document.querySelector(".eb-nav-root");

  // 1. Toggle Mobile Menu
  if (mobileTrigger && menuWrapper) {
    mobileTrigger.addEventListener("click", () => {
      const isOpen = menuWrapper.classList.toggle("is-open");
      mobileTrigger.classList.toggle("is-active");

      // Prevent body scroll when menu is open
      body.style.overflow = isOpen ? "hidden" : "auto";
    });
  }

  // 2. Close menu when clicking a link
  const navLinks = document.querySelectorAll(".eb-nav-item");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuWrapper.classList.remove("is-open");
      mobileTrigger.classList.remove("is-active");
      body.style.overflow = "auto";
    });
  });

  // 3. Header Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navRoot.classList.add("eb-nav-scrolled");
    } else {
      navRoot.classList.remove("eb-nav-scrolled");
    }
  });
});
