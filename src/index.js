import "../style/style.scss";

const btn = document.querySelectorAll(".ellipce>button");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");

btn[0].addEventListener("click", () => {
  content2.style.display = "none";
  content1.style.display = "block";
});

btn[1].addEventListener("click", () => {
  content1.style.display = "none";
  content2.style.display = "block";
});
