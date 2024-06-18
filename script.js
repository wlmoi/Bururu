document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua elemen provinsi
    var provinces = document.querySelectorAll('.province');

    // Tambahkan event listener untuk setiap provinsi
    provinces.forEach(function (province) {
        province.addEventListener('click', function () {
            // Reset warna semua provinsi
            provinces.forEach(function (p) {
                p.style.fill = "#d3d3d3";
            });

            // Ganti warna provinsi yang diklik
            province.style.fill = "#ff0000"; // Ganti warna sesuai keinginan
        });
    });
});
