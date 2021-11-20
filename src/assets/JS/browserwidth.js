function $(el) {
  return document.querySelector(el);
}

let widthBox = $(".width");

widthBox.innerText =
  "Browser width: " + (document.body.offsetWidth + 17) + "px";

window.addEventListener("resize", () => {
  widthBox.innerText =
    "Browser width: " + (document.body.offsetWidth + 17) + "px";
});
