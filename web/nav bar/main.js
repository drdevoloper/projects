
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < 1 && rect.bottom >= 1;
      if (isVisible) {
        document.querySelectorAll(".nav-item")[index].style.color = "#ffcc00";
      } else {
        document.querySelectorAll(".nav-item")[index].style.color = "white";
      }
    });
  });
  