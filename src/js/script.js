const hamburger = document.querySelector("#hamburger");
const navbar = document.getElementById("nav-menu");
const scrollContainer = document.querySelector(".overflow-x-scroll");
const scrollLeftBtn = document.getElementById("scrollLeftBtn");
const scrollRightBtn = document.getElementById("scrollRightBtn");

// //navbar ketika di scroll
window.onscroll = function () {
  const header = document.getElementById("header");
  const fixed = header.offsetTop;

  if (window.pageYOffset > fixed) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// membuka dan menutup di hamburger menu
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navbar.classList.toggle("animasi-navbar");
  navbar.classList.toggle("hidden");
});

// navbar ketika di klik di area lain akan tertutup
document.addEventListener("click", function (event) {
  const isClickInside = navbar.contains(event.target) || hamburger.contains(event.target);

  if (!isClickInside) {
    hamburger.classList.remove("hamburger-active");
    navbar.classList.remove("animasi-navbar");
    navbar.classList.add("hidden");
  }
});

// DIY scroll samping
scrollLeftBtn.addEventListener("click", function () {
  scrollContainer.scrollBy({
    left: -200, // Jumlah scroll ke kiri (ubah sesuai kebutuhan)
    behavior: "smooth", // Animasi scroll
  });
});

scrollRightBtn.addEventListener("click", function () {
  scrollContainer.scrollBy({
    left: 200, // Jumlah scroll ke kanan (ubah sesuai kebutuhan)
    behavior: "smooth", // Animasi scroll
  });
});
