let menu = document.querySelector("#menu-icon");
const nav_element = document.querySelector("#nav");
const footer_element = document.querySelector("#footer");

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
});

// Swiper
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 40,
    stretch: true,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    // el: ".swiper-pagination",
  },
});

// Scroll Listner
window.addEventListener("scroll", function () {
  nav_element.classList.toggle("sc_scroll", window.scrollY > 0);
  nav_element.classList.remove("active");
  footer_element.classList.toggle(
    "sc_scroll",
    window.scrollY >= document.body.offsetHeight - 20
  );
});

// Scroll to Top
function topScroll() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Nav Menu Icon Click event
menu.onclick = () => {
  nav_element.classList.toggle("active");
  nav_element.classList.remove("sc_scroll");
};

// Gallery images
const gallery_list = [];

for (let index = 1; index < 101; index++) {
  gallery_list.push(`./assets/gallery/img (${index}).jpg`);
}

for (let x = 0; x < gallery_list.length; x++) {
  const element =
    '<div class="swiper-slide"><img src="' + gallery_list[x] + '"></div>';
  document.querySelector(".swiper-wrapper").innerHTML += element;
}
