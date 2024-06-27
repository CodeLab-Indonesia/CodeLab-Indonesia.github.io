// Pastikan script dijalankan setelah DOM sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan semua elemen nav item
  const navItems = document.querySelectorAll("#nav .nav-item");

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", function () {
      // Menghapus class aktif dari semua nav item
      navItems.forEach((item) => {
        // hapus class aktif di semua
        item.classList.remove("font-extrabold", "lg:underline", "lg:underline-offset-8");
      });

      // Menambahkan class aktif ke nav item yang diklik
      this.classList.add("font-extrabold", "lg:underline", "lg:underline-offset-8");
    });
  });
});
