function reactionClick() {
    let btns = document.querySelectorAll(".reaction-btn");
  
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", () => {
        if (
          btns[i].classList.contains("thumbs__up") &&
          !btns[i].classList.contains("reaction-click-right")
        ) {
          btns[i].classList.add("reaction-click-right");
  
          setTimeout(() => {
            btns[i].classList.remove("reaction-click-right");
          }, 300);
        }
  
        if (
          btns[i].classList.contains("thumbs__down") &&
          !btns[i].classList.contains("reaction-click-left")
        ) {
          btns[i].classList.add("reaction-click-left");
  
          setTimeout(() => {
            btns[i].classList.remove("reaction-click-left");
          }, 300);
        }
      });
    }
  }