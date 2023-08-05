let filterBox = document.querySelectorAll(".portfolio__img");
let filterList = document.querySelectorAll(".portfolio__list li");

document.querySelector(".portfolio__list").addEventListener("click", (event) => {
  if (event.target.tagName !== "LI") return false;

  let filterClass = event.target.dataset["f"];

  filterList.forEach((li) => {
    li.classList.remove("active");
  });

  event.target.classList.add("active");

  filterBox.forEach((element) => {
    element.classList.remove("hide");
    if (!element.classList.contains(filterClass) && filterClass !== "all") {
      element.classList.add("hide");
    }
  });
});