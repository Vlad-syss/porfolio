// ========================================================================================================================================================================
const element = document.querySelector(".header__row_lang");
const choices = new Choices(element,{
  searchEnabled: false,
  itemSelectText:"",
});

// ========================================================================================================================================================================
function readMore() {
  document.querySelector("#more").classList.toggle("text_active");
}
// ========================================================================================================================================================================
let progress = document.querySelector(".progress");

window.addEventListener('scroll', progressBar);

function progressBar(event) {
  let setScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let percent = setScroll / scrollHeight * 100;

  progress.style.width = percent + '%';
}
