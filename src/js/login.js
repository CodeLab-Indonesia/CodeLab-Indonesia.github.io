document.getElementById("loginForm").addEventListener("submit", function (event) {
  // Mencegah form submit default
  event.preventDefault();

  // Ambil nilai username dan password
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simpan ke localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("login", "true");

  // Redirect ke halaman utama
  window.location.href = "../index.html";
});
