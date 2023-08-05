const headerBurger = document.querySelector(".header__burger");
const header = document.querySelector(".header__row");

headerBurger.addEventListener("click", (event) => {
  document.body.classList.toggle("lock");
  headerBurger.classList.toggle("active");
  header.classList.toggle("active");
})