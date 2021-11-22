function hideImages() {
  let imgs = document.querySelectorAll("img");
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].src === "") {
      imgs[i].classList.add("hide");
    }
  }
}
