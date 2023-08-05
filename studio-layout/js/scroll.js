window.addEventListener("scroll", (event) => {
  const header = document.querySelector(".header__row");
  const scrollView = window.pageYOffset || document.documentElement.scrollTop;

  if(scrollView >= 80){
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
})