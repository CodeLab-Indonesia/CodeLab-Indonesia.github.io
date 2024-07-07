const hamburger = document.querySelector("#hamburger");
const navbar = document.getElementById("nav-menu");
const scrollContainer = document.querySelector(".overflow-x-scroll");
const scrollLeftBtn = document.getElementById("scrollLeftBtn");
const scrollRightBtn = document.getElementById("scrollRightBtn");

// for handle login/logout
const loginTrueElements = document.querySelectorAll(".login-true");
const loginFalseElements = document.querySelectorAll(".login-false");
const usernameElement = document.querySelectorAll(".username");
const logoutButtons = document.querySelectorAll(".log-out");
// Periksa status login di localStorage
const isLoggedIn = localStorage.getItem("login") === "true";
const username = localStorage.getItem("username");

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

// handle status login / logout
if (isLoggedIn) {
  // Jika login true
  loginTrueElements.forEach((element) => {
    element.classList.remove("hidden");
    element.classList.add("inline-flex");
  });

  loginFalseElements.forEach((element) => {
    element.classList.remove("inline-flex");
    element.classList.add("hidden");
  });

  usernameElement.forEach((element) => (element.textContent = username.slice(0, 15)));
} else {
  // Jika login false
  loginTrueElements.forEach((element) => {
    element.classList.remove("inline-flex");
    element.classList.add("hidden");
  });

  loginFalseElements.forEach((element) => {
    element.classList.remove("hidden");
    element.classList.add("inline-flex");
  });
}

// Tambahkan event listener untuk tombol logout
logoutButtons.forEach((button) => {
  button.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
  });
});

// sweet alert
if (window.location.hash === "#success=true") {
  Swal.fire({
    title: "Success!",
    text: "Your idea has been added!",
    icon: "success",
    confirmButtonText: "OK",
  });

  // lalu hapus hash
  window.location.hash = "";
}
