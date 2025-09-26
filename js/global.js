function scrollSpy() {
  let navLinks = document.querySelectorAll("nav ul li");
  let sections = document.querySelectorAll("section, header");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      let sectionTop = section.offsetTop - 100;
      let sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(li => {
      li.classList.remove("active");
      let link = li.querySelector("a");
      if (link && link.getAttribute("href") === `#${current}`) {
        li.classList.add("active");
      }
    });
  });
}
function scrolling() {
  link2.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    window.scrollTo({
      "top": Chef.offsetTop - navHeight
    });
  })
  link3.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    window.scrollTo({
      "top": Menu.offsetTop - navHeight
    });
  })
  link4.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    window.scrollTo({
      "top": Book.offsetTop - navHeight
    });
  })
}
