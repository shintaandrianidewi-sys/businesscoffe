// JavaScript untuk Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        // Contoh: Feedback saat tombol download diklik
        if (targetId === '#tips') {
             // Asumsi form di section tips memiliki class 'download-form'
             document.querySelector('.tip-content form').addEventListener('submit', function(event) {
                 event.preventDefault();
                 alert("E-Book Tips Brewing telah terkirim ke email Anda! Cek folder spam juga ya.");
                 this.reset(); // Mengosongkan form
             });
        }
    });
});

console.log("Website Sinergi Kopi berhasil dimuat!");
