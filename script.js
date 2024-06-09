// script.js

document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const title = this.querySelector("P").textContent;
      //   alert("You clicked on " + title);
      // Here you can add functionality to open a full-size image in a modal
    });
  });
});

document.onmouseover("DOMContentLoaded", function () {});
