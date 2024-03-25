const mgs = document.querySelectorAll(".mg");
mgs.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.add("mg--clicked");
  })
);