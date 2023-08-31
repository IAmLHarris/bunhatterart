let dogbutton = document.querySelector("#dog");
let catbutton = document.querySelector("#cat");
let bunbutton = document.querySelector("#bun");

let dogcard = document.querySelector("#dogcard");
let catcard = document.querySelector("#catcard");
let buncard = document.querySelector("#buncard");

dogbutton.addEventListener("click", () => {
  // console.log("dog works");
  buncard.className = "image-hidden";
  catcard.className = "image-hidden";
  dogcard.className = "image-loaded";
});

catbutton.addEventListener("click", () => {
  // console.log("cat works");
  buncard.className = "image-hidden";
  catcard.className = "image-loaded";
  dogcard.className = "image-hidden";
});

bunbutton.addEventListener("click", () => {
  // console.log("bun works");
  buncard.className = "image-loaded";
  catcard.className = "image-hidden";
  dogcard.className = "image-hidden";
});
