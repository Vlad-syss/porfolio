new Swiper (".comment__container", {
  slidesPerView: 1,
  loop: true,
  spaceBetween:30,
  autoHeight:true,
  autoplay: {
      delay: 2500,
  },
  speed:600,
  pagination: {
      el:".swiper-pagination",
      clickable:true,
  },
  breakpoints:{
    320:{
      slidesPerView: 1,
      centeredSlides:true,
    },
    890:{
      slidesPerView: 2,
    },
  },
});