let btn = document.querySelector("button");
let body = document.querySelector("body");
btn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
})

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});