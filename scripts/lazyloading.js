let stasisImages = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));

  image.onload = () => {
    image.removeAttribute("data-src");
    console.log("lazy load");

    image.setAttribute("class", "image-loaded");
    console.log(image);
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });

  stasisImages.forEach((img) => {
    observer.observe(img);
  });
} else {
  stasisImages.forEach((img) => {
    loadImages(img);
  });
}
