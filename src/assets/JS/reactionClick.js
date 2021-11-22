function reactionClick() {
  let btns = document.querySelectorAll(".reaction-btn");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      if (!btns[i].classList.contains("reaction-click")) {
        btns[i].classList.add("reaction-click");

        setTimeout(() => {
          btns[i].classList.remove("reaction-click");
        }, 300);
      }
    });
  }
}
