// Collapsable
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);


// Magnifying Glass
const mgs = document.querySelectorAll(".mg");
mgs.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.add("mg--clicked");
  })
);