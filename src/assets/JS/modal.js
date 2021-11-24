function modal() {
  function $(el) {
    return document.querySelector(el);
  }

  const wrapper = $(".modal-wrapper");

  const modalBtn = $(".create__post__modal__text");
  const modalBox = $(".create__post-container");
  const createPostBtn = $(".create__post__button");
  const close = $(".close__modal");

  modalBtn.addEventListener("click", () => {
    if (wrapper.classList.contains("hide")) {
      wrapper.classList.remove("hide");
    }
  });

  createPostBtn.addEventListener("click", () => {
    if (!modalBox.classList.contains("hide")) {
      wrapper.classList.add("hide");
    }
  });

  close.addEventListener("click", () => {
    wrapper.classList.add("hide");
  });

  wrapper.addEventListener("click", (evt) => {
    if (evt.target === wrapper) {
      wrapper.classList.add("hide");
    }
  });
}
