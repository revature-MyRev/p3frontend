function sidepanel() {
  function $(el) {
    return document.querySelector(el);
  }

  const outerWrapper = $(".side__panel-outer-wrapper");
  const hamburger = $(".hamburger-container");
  const sidepanel = $(".side__panel-wrapper");
  const closeBtn = $(".close-side-panel");
  const underlines = document.querySelectorAll(".underline");
  const links = document.querySelectorAll(".list__item__link");

  hamburger.addEventListener("click", () => {
    sidepanel.style.width = "60%";
    outerWrapper.style.width = "100%";
  });

  closeBtn.addEventListener("click", () => {
    sidepanel.style.width = "0%";
    outerWrapper.style.width = "0%";
  });

  outerWrapper.addEventListener("click", (evt) => {
    if (evt.target === outerWrapper) {
      sidepanel.style.width = "0%";
      outerWrapper.style.width = "0%";
    }
  });

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", () => {
      underlines[i].style.width = "100%";
    });
  }

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseleave", () => {
      underlines[i].style.width = "0%";
    });
  }
}
